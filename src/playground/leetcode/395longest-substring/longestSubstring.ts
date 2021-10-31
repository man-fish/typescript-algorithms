function longestSubstring(s: string, k: number): number {
    function helper(start: number, end: number): number {
        if (end - start + 1 < k) {
            return 0;
        }

        const memorize: {
            [propName: string]: number;
        } = {};

        for (let i = start; i <= end; i++) {
            let key = s[i];
            memorize[key] = memorize[key] ? memorize[key] + 1 : 1;
        }

        while (end - start + 1 >= k && memorize[s[start]] < k) {
            start++;
        }

        while (end - start + 1 >= k && memorize[s[end]] < k) {
            end--;
        }

        if (end - start + 1 < k) {
            return 0;
        }

        for (let pivot = start; pivot <= end; pivot++) {
            if (memorize[s[pivot]] < k) {
                return Math.max(
                    helper(start, pivot - 1),
                    helper(pivot + 1, end)
                );
            }
        }

        return end - start + 1;
    }
    return helper(0, s.length - 1);
}

// input：s = "aaabb", k = 3
// output：3

console.log(longestSubstring('aaabb', 3));
