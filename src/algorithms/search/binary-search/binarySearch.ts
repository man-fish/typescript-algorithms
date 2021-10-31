export default function binarySearch(nums: number[], target: number) {
    const n = nums.length;
    if (!n) return -1;
    let left = 0,
        right = n - 1;
    while (left <= right) {
        let middle = left + ((right - left) >> 1);
        if (nums[middle] === target) {
            return middle;
        } else if (nums[middle] > target) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }
    }
    return -1;
}

export function binarySearchRightBorder(nums: number[], target: number) {
    const n = nums.length;
    if (!n) return -1;
    let left = 0,
        right = n;
    while (left < right) {
        let middle = left + ((right - left) >> 1);
        if (nums[middle] >= target) {
            right = middle;
        } else {
            left = middle + 1;
        }
    }
    return right;
}

export function binarySearchLeftBorder(nums: number[], target: number) {
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
    return left;
}

function binarySearchRecursive(arr: number[], num: number): number {
    return _binarySearch(arr, num, 0, arr.length - 1);
}

function _binarySearch(arr: number[], n: number, l: number, r: number): number {
    if (l >= r) {
        return arr[l] === n ? l : -1;
    }
    let mid = l + ((r - l) >> 1);
    if (arr[mid] === n) {
        return mid;
    } else if (arr[mid] > n) {
        if (l === mid) {
            return -1;
        }
        return _binarySearch(arr, n, l, mid - 1);
    } else {
        return _binarySearch(arr, n, mid + 1, r);
    }
}
