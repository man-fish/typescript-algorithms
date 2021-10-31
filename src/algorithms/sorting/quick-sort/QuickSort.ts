function swap(arr: number[], i: number, j: number) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}

function randomPartition(arr: number[], l: number, r: number): number {
    let divider = (Math.random() * (r - l + 1) + l) | 0;
    swap(arr, divider, r);

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

function _quickSort(arr: number[], l: number, r: number) {
    if (l >= r) return;
    let divider = randomPartition(arr, l, r);
    _quickSort(arr, l, divider - 1);
    _quickSort(arr, divider + 1, r);
}

export function quickSort(arr: number[]) {
    _quickSort(arr, 0, arr.length - 1);
    return arr;
}

console.log(quickSort([1, 3, 2, 5]));
