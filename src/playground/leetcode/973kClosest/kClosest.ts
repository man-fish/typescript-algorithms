function swap(arr: any[], i: number, j: number) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}

function getLen(point: [number, number]) {
    return point[0] * point[0] + point[1] * point[1];
}

function randomPartition(
    points: number[][],
    start: number,
    end: number
): number {
    let divider = (Math.random() * (end - start + 1) + start) | 0;
    swap(points, divider, end);
    let pivot = getLen(points[end] as [number, number]);
    let sIdx = start;
    for (let i = start; i < end; i++) {
        if (pivot >= getLen(points[i] as [number, number])) {
            swap(points, sIdx++, i);
        }
    }
    swap(points, end, sIdx);
    return sIdx;
}

function quickSelect(
    points: number[][],
    start: number,
    end: number,
    k: number
) {
    let divider = randomPartition(points, start, end);
    if (start === end || divider === k - 1) return;
    if (divider > k - 1) {
        quickSelect(points, start, divider - 1, k);
    } else {
        quickSelect(points, divider + 1, end, k);
    }
}

export function kClosest(points: number[][], k: number): number[][] {
    quickSelect(points, 0, points.length - 1, k);
    return points.slice(0, k);
}
