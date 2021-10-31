export default class Difference {
    private diff: number[];
    constructor(nums: number[]) {
        let n = nums.length;
        this.diff = new Array(n);

        this.diff[0] = nums[0];

        for (let i = 1; i < n; i++) {
            this.diff[i] = nums[i] - nums[i - 1];
        }
    }

    increment(i: number, j: number, val: number) {
        this.diff[i] += val;
        if (j + 1 < this.diff.length) {
            this.diff[j + 1] -= val;
        }
    }

    result(): number[] {
        let res = [];
        if (this.diff.length > 0) {
            res[0] = this.diff[0];
            for (let i = 1; i < this.diff.length; i++) {
                res[i] = res[i - 1] + this.diff[i];
            }
        }
        return res;
    }
}
