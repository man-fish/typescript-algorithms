function eulerPath(n: number, vertexes: [number, number][]) {
    let min = Number.MAX_SAFE_INTEGER,
        max = Number.MIN_SAFE_INTEGER;

    let isCurcuit = true;

    let map = new Array(n),
        indegree = map.slice(),
        path: number[] = [];

    for (let i = 0; i < n; i++) {
        map[i] = new Array(n).fill(0);
    }

    for (let [x, y] of vertexes) {
        map[x][y]++;
        map[y][x]++;
        max = Math.max(x, y, max);
        min = Math.min(x, y, min);
        indegree[x]++;
        indegree[y]++;
    }

    for (let i of range(min, max)) {
        if (indegree[i] % 2) {
            isCurcuit = false;
            dfs(i);
            break;
        }
    }

    if (isCurcuit) {
        dfs(min);
    }

    console.log(isCurcuit ? 'euler curcuit' : 'euler path');
    console.log('path: ', path);

    function dfs(start: number) {
        path.push(start);
        for (let i = 0; i < n; i++) {
            if (map[start][i]) {
                map[start][i] = map[i][start] = 0;
                dfs(i);
                break;
            }
        }
    }
}

function* range(x: number, y: number) {
    for (let i = x; i <= y; i++) {
        yield i;
    }
}

function findItinerary(tickets: [string, string][]): string[] {
    let map = new Map<string, string[]>();

    for (let [from, to] of tickets) {
        if (map.has(from)) {
            map.get(from)!.push(to);
        } else {
            map.set(from, [to]);
        }
    }

    for (let key of map.keys()) {
        map.get(key)!.sort();
    }

    let res: string[] = [];
    let dfs: (from: string) => void = (from: string) => {
        while (true) {
            if (!map.has(from) || !map.get(from)!.length) break;
            dfs(map.get(from)!.shift() as string);
        }

        res.push(from);
    };

    dfs('JFK');
    return res.reverse();
}

let res = findItinerary([
    ['JFK', 'AAA'],
    ['JFK', 'BBB'],
    ['AAA', 'JFK'],
    ['BBB', 'JFK'],
]);

console.log(res);

function crackSafe(n: number, k: number): string {
    let visited = new Set<string>();
    let res: string = '';
    const dfs: (cur: string) => void = (cur: string) => {
        for (let i = 0; i < k; i++) {
            let triple = cur + i;
            console.log(triple);
            if (!visited.has(triple)) {
                visited.add(triple);
                dfs(triple.slice(1));
                res += i;
            }
        }
    };

    dfs('00');
    return res + '0';
}

let res1 = crackSafe(2, 2);

console.log(res1);
