function insertionSort(arr: number[]) {
    let n = arr.length;
    for (let i = 1; i < n; i++) {
        for (let j = i; j > 0 && arr[j] < arr[j - 1]; j--) {
            [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
        }
    }
}
