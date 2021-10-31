export function reversePairs(nums: number[]): number {
    return mergeSelect(nums, 0, nums.length - 1);
}

function mergeSelect(nums: number[], l: number, r: number): number {
    if (l >= r) return 0;
    let mid = ((l + r) / 2) | 0;
    let count = 0;
    count += mergeSelect(nums, l, mid);
    count += mergeSelect(nums, mid + 1, r);
    count += merge(nums, l, mid, r);
    return count;
}

function merge(nums: number[], l: number, lr: number, r: number): number {
    let temp = new Array(r - l + 1);
    let ll = l;
    // start of left duration
    let rl = lr + 1;
    // start of right duration
    let tIdx = 0;
    let count = 0;

    let i = l,
        j = lr + 1;
    while (i <= lr) {
        while (j <= r && nums[i] > 2 * nums[j]) j++;
        count += j - lr - 1;
        i++;
    }

    while (ll <= lr && rl <= r) {
        if (nums[ll] < nums[rl]) {
            temp[tIdx++] = nums[ll++];
        } else {
            temp[tIdx++] = nums[rl++];
        }
    }

    while (ll <= lr) {
        temp[tIdx++] = nums[ll++];
    }

    while (rl <= r) {
        temp[tIdx++] = nums[rl++];
    }

    for (tIdx = 0; tIdx < temp.length; tIdx++) {
        nums[l + tIdx] = temp[tIdx];
    }
    return count;
}

console.log(reversePairs([1, 3, 2, 3, 1, 5]));
console.log(reversePairs([2, 4, 3, 5, 1]));
console.log(
    reversePairs([
        2147483647,
        2147483647,
        -2147483647,
        -2147483647,
        -2147483647,
        2147483647,
    ])
);
