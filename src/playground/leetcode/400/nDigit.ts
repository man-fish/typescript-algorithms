function findNthDigit(n: number): number {
    let l = 1,
        r = n;
    while (l <= r) {
        let m = ((l + r) / 2) | 0;
        let curOffset = getDigitOffset(m);
        let curDuration = getDigitDuration(m);
        let offsetInNum = curOffset - n;
        if (curOffset >= n && curOffset - curDuration < n) {
            console.log(m);
            return (
                ((m % Math.pow(10, offsetInNum + 1)) /
                    Math.pow(10, offsetInNum)) |
                0
            );
        } else if (curOffset < n) l = m + 1;
        else if (curOffset - curDuration >= n) r = m - 1;
    }
    return n;
}

function getDigitOffset(n: number): number {
    if (n < 10) return n;
    let singleOffset = Math.log10(n) | 0;
    let baseNum = Math.pow(10, singleOffset);
    let singleCount = (n - baseNum + 1) * (singleOffset + 1);
    return singleCount + getDigitOffset(baseNum - 1);
}

function getDigitDuration(n: number): number {
    return (Math.log10(n) | 0) + 1;
}

console.log(findNthDigit(13));
