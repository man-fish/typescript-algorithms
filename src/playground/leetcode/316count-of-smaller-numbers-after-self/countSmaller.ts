function countSmaller(nums: number[]): number[] {
    return mergeSelect(nums, 0, nums.length - 1);
}

function mergeSelect(nums: number[], l: number, r: number): number[] {
    if (l >= r) return new Array(nums.length).fill(0);
    let mid = ((l + r) / 2) | 0;
    let lRet = mergeSelect(nums, l, mid);
    let rRet = mergeSelect(nums, mid + 1, r);
    let ret = merge(nums, l, mid, r);
    for (let i = 0; i < ret.length; i++) {
        ret[i] += lRet[i] + rRet[i];
    }
    return ret;
}

function merge(nums: number[], l: number, lr: number, r: number): number[] {
    let temp = new Array(r - l + 1);
    let ll = l;
    // start of left duration
    let rl = lr + 1;
    // start of right duration
    let tIdx = 0;
    let ret = new Array(nums.length).fill(0);
    let i = l;
    let j = lr + 1;
    while (i <= lr) {
        while (j <= r && nums[i] > nums[j]) j++;
        ret[i] = j - lr - 1;
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
    return ret;
}

// 输入：nums = [5,2,6,1]
// 输出：[2,1,1,0]

console.log(countSmaller([5, 2, 6, 1, 1]));
