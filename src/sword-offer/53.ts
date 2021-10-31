function binarySearchLeftBorder(nums: number[], target: number) {
    const n = nums.length;
    if (!n) return -1;
    let left = -1,
        right = n - 1;
    while (left < right) {
        let middle = Math.ceil((left + right) / 2);
        if (nums[middle] <= target) {
            left = middle;
        } else {
            right = middle - 1;
        }
    }
    return nums[left] <= target ? left : -1;
}

console.log(binarySearchLeftBorder([1, 2, 3, 4, 4, 4], 4));
