function countingSort(arr: number[]): number[] {
    let n = arr.length;
    // get the highest and lowest num from the array;
    let loV = 0,
        hiV = 0;

    for (let v of arr) {
        loV = Math.min(v, loV);
        hiV = Math.max(v, hiV);
    }

    // make bucket(mark array)
    let bucket = new Array(hiV - loV + 1),
        sorted = new Array(n).fill(0);

    // count v counts in arr and record on v - loV in bucket
    for (let v of arr) {
        bucket[v - loV]++;
    }

    // sum v and vals lower than v counts on v - loV in bucket
    for (let i = 1; i < bucket.length; i++) {
        bucket[i] = bucket[i - 1] + bucket[i];
    }

    // make new Arr from bucket
    for (let v of arr) {
        sorted[bucket[v - loV] - 1] = v;
        bucket[v - loV]--;
    }

    return sorted;
}
