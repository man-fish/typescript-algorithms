function quickSelect(arr: number[], l: number, r: number, idx: number): number {
    let divider = randomPartition(arr, l, r);
    if (divider === idx) {
        return arr[idx];
    } else {
        return divider > idx
            ? quickSelect(arr, l, divider - 1, idx)
            : quickSelect(arr, divider + 1, r, idx);
    }
}

function randomPartition(arr: number[], l: number, r: number): number {
    let divider = (Math.random() * (r - l + 1) + l) | 0;
    swap(arr, divider, r);
    return partition(arr, l, r);
}

function swap(arr: number[], i: number, j: number) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}

function partition(arr: number[], l: number, r: number): number {
    let pivot = arr[r];
    let sIdx = l;
    for (let i = l; i < r; i++) {
        if (arr[i] <= pivot) {
            swap(arr, i, sIdx++);
        }
    }
    swap(arr, r, sIdx);
    return sIdx;
}

function findKthLargest(arr: number[], k: number) {
    return quickSelect(arr, 0, arr.length - 1, arr.length - k);
}

console.log(findKthLargest([1, 2, 3, 3, 4, 4, 5], 4));
