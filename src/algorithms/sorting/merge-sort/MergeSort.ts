function MergeSort(arr: number[]) {
    _mergeSort(arr, 0, arr.length - 1);
    return arr;
}

function _mergeSort(arr: number[], l: number, r: number) {
    if (l >= r) {
        return;
    }
    let mid = l + ((r - l) >> 2);
    _mergeSort(arr, l, mid);
    _mergeSort(arr, mid + 1, r);
    merge(arr, l, mid, r);
}

function merge(arr: number[], l: number, lr: number, r: number) {
    let temp: number[] = new Array(r - l + 1);
    let ll = l;
    let rl = lr + 1;
    let i = 0;
    while (ll <= lr && rl <= r) {
        if (arr[ll] < arr[rl]) {
            temp[i++] = arr[ll++];
        } else {
            temp[i++] = arr[rl++];
        }
    }

    while (ll <= lr) {
        temp[i++] = arr[ll++];
    }

    while (rl <= r) {
        temp[i++] = arr[rl++];
    }

    for (i = 0; i < temp.length; i++) {
        arr[l + i] = temp[i];
    }
}

console.log(MergeSort([1, 3, 2, 0, 5]));
