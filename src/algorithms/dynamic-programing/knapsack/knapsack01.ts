// N = 3, W = 4
// wt = [2, 1, 3]
// val = [4, 2, 3]

function knapsack01(
    capacity: number,
    n: number,
    weights: number[],
    values: number[]
): number {
    let dp = new Array(capacity + 1);
    for (let i = 0; i < capacity + 1; i++) {
        dp[i] = new Array(n + 1).fill(0);
    }

    for (let i = 1; i <= capacity; i++) {
        for (let j = 1; j <= n; j++) {
            if (weights[j - 1] <= i) {
                dp[i][j] = Math.max(
                    dp[i - weights[j - 1]][j - 1] + values[j - 1],
                    dp[i][j - 1]
                );
            } else {
                dp[i][j] = dp[i][j - 1];
            }
        }
    }
    console.log(dp);
    return dp[capacity][n];
}

function knapsack01Recursive(
    capacity: number,
    n: number,
    weights: number[],
    values: number[]
): number {
    function helper(capacity: number, i: number): number {
        if (i === 0) {
            return capacity - weights[i] >= 0 ? values[i] : 0;
        }

        return Math.max(
            helper(capacity - weights[i], i - 1) + values[i],
            helper(capacity, i - 1)
        );
    }

    return helper(capacity, n - 1);
}

console.log(knapsack01(4, 3, [2, 1, 3], [4, 2, 3]));
