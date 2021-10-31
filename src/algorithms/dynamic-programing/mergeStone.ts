function mergeStone(stones: number[]) {
    let n = stones.length;
    let dp = new Array(n);
    for (let i = 0; i < n; i++) {
        dp[i] = new Array(n).fill(0);
    }

    let sums = new Array(n + 1).fill(0);
    for (let i = 1; i < n + 1; i++) {
        sums[i] = stones[i - 1] + sums[i - 1];
    }
    console.log(sums);

    for (let l = 2; l <= n; l++) {
        for (let i = 0; i < n; i++) {
            let j = i + l - 1;
            if (j >= n) {
                continue;
            }
            for (let k = i; k < j; k++) {
                if (dp[i][j] === 0) {
                    dp[i][j] = dp[i][k] + dp[k + 1][j] + sums[j + 1] - sums[i];
                } else {
                    dp[i][j] = Math.min(
                        dp[i][j],
                        dp[i][k] + dp[k + 1][j] + sums[j + 1] - sums[i]
                    );
                }
            }
        }
    }
    console.log(dp);
    return dp[0][n - 1];
}

function mergeStoneRecursive(stones: number[], k: number) {
    let n = stones.length;
    let sums = new Array(n + 1).fill(0);
    for (let i = 1; i < n + 1; i++) {
        sums[i] = sums[i - 1] + stones[i - 1];
    }
    function dp(i: number, j: number): number {
        if (j - i + 1 === k || j - i + 1 === k - 1) {
            return sums[j + 1] - sums[i];
        } else if (j - i + 1 < k) {
            return -1;
        }

        let bestChoice = -1;
        for (let m = i + k - 1; m <= j - k; m++) {
            let l = dp(i, m);
            let r = dp(m + 1, j);
            if (l === -1 || r === -1) {
                continue;
            }
            let curChoice = l + r + sums[j + 1] - sums[i];
            bestChoice =
                bestChoice === -1 ? curChoice : Math.min(curChoice, bestChoice);
        }

        return bestChoice;
    }
    return dp(0, n - 1);
}

// let stones = [3, 2, 4, 1]
//     K = 2;
// [
//     [0, 5, 14, 0],
//     [0, 0, 6, 0],
//     [0, 0, 0, 0],
//     [0, 0, 0, 0],
// ];

let stones = [3, 5, 1, 2, 6],
    K = 3;
console.log(mergeStoneRecursive(stones, K));
