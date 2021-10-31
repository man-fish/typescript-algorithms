function firstMissingPositive(nums: number[]): number {
    let n = nums.length;
    for (let i = 0; i < n; i++) {
        if (nums[i] <= 0) {
            nums[i] = n + 1;
            continue;
        }
    }

    for (let i = 0; i < n; i++) {
        let num = Math.abs(nums[i]);
        if (num <= n) nums[num - 1] = -Math.abs(nums[num - 1]);
    }

    for (let i = 1; i <= n; i++) {
        if (nums[i - 1] > 0) {
            return i;
        }
    }

    return n + 1;
}
