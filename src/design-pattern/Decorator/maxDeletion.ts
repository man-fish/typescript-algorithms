function maxDeletion(arr: number[]) {
    let n = arr.length,
        dp = new Array(n).fill(1);
    let max = 0;
    for (let i = n - 1; i >= 0; i--) {
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[i]) dp[i] = Math.max(dp[i], dp[j] + 1);
        }
        max = Math.max(max, dp[i]);
    }
    return max;
}

console.log(maxDeletion([3, 4, 3, 5, 2, 1]));

function maxUp() {}
