export function findMedianSortedArrays(
    nums1: number[],
    nums2: number[]
): number {
    let m = nums1.length,
        n = nums2.length;
    if ((m + n) % 2 === 0) {
        console.log('is two / 2');
        // console.log((m + n) / 2);
        // console.log((m + n) / 2 + 1);
        return (
            (getKElement(nums1, nums2, (m + n) / 2) +
                getKElement(nums1, nums2, (m + n) / 2 + 1)) /
            2
        );
    } else {
        return getKElement(nums1, nums2, Math.ceil((m + n) / 2));
    }
}

function getKElement(nums1: number[], nums2: number[], k: number) {
    let n1 = nums1.length,
        n2 = nums2.length;

    let l1 = 0,
        l2 = 0;
    console.log('k', k);
    while (true) {
        if (l1 === n1) {
            return nums2[l2 + k - 1];
        }

        if (l2 === n2) {
            return nums1[l1 + k - 1];
        }

        if (k === 1) {
            return Math.min(nums1[l1], nums2[l2]);
        }
        let half = (k / 2) | 0;
        let m1 = Math.min(l1 + half, n1) - 1,
            m2 = Math.min(l2 + half, n2) - 1;

        if (nums1[m1] <= nums2[m2]) {
            k -= m1 - l1 + 1;
            l1 = m1 + 1;
        } else {
            k -= m2 - l2 + 1;
            l2 = m2 + 1;
        }
    }
}

let res = findMedianSortedArrays([1, 2], [3, 5]);
console.log(res);
