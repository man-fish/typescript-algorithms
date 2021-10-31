export function minNum(num: number): number {
    let arr = num
        .toString()
        .split('')
        .map((c) => Number(c));
    let visited = new Array(10);
    function getMin(nums: number[]) {
        let idx = -1;
        for (let i = nums.length - 1; i >= 0; i--) {
            let num = nums[i];
            if (idx === -1 || (num < nums[idx] && !visited[num])) {
                visited[num] = 1;
                idx = i;
            }
        }
        return idx;
    }
    let doGet = true;

    while (doGet) {
        let minIdx = getMin(arr),
            min = arr[minIdx];

        if (minIdx === -1) break;
        doGet = !min;
        for (let i = 0; i < arr.length; i++) {
            if (min < arr[i]) {
                if (minIdx <= i) {
                    doGet = true;
                    break;
                }
                arr.splice(minIdx, 1);
                arr.splice(i, 0, min);
            }
        }
    }

    return Number(Number(arr.join('')));
}

let res = minNum(7024);
console.log(res);
res = minNum(1234);
console.log(res);

function isContinuous(nums: [number, number, number, number, number]): boolean {
    nums.sort((a, b) => a - b);

    let skipChance = nums.lastIndexOf(0) + 1;

    for (let i = skipChance + 1; i < nums.length; i++) {
        let bets = nums[i] - nums[i - 1] - 1;
        if (bets) {
            if (bets > skipChance) {
                return false;
            }
            skipChance -= bets;
        }
    }

    return true;
}

console.log(isContinuous([0, 0, 0, 0, 0]));

function resolveModule(modules: string[], preNodes: string[][]): string[] {
    let n: number = modules.length;
    let indegrees: number[] = preNodes.map((n) => n.length),
        nextNodes: number[][] = new Array(n);

    for (let i = 0; i < n; i++) {
        nextNodes[i] = [];
    }

    for (let i = 0; i < n; i++) {
        for (let pre of preNodes[i]) {
            nextNodes[(pre.codePointAt(0) as number) - 65].push(i);
        }
    }

    for (let i = 0; i < n; i++) {
        nextNodes[i].sort();
    }

    let queue: number[] = [];

    for (let i = 0; i < n; i++) {
        if (indegrees[i] === 0) queue.push(i);
    }

    let res = [];

    while (queue.length) {
        let pre = queue.shift() as number;
        n--;
        res.push(String.fromCodePoint(pre + 65));
        for (let cur of nextNodes[pre]) {
            indegrees[cur] -= 1;
            if (indegrees[cur] === 0) queue.push(cur);
        }
    }

    return !n ? res : [];
}

console.log(
    resolveModule(
        ['A', 'B', 'C', 'D', 'E', 'F'],
        [['C', 'F'], ['C', 'D'], ['E'], ['E'], [], []]
    )
);
