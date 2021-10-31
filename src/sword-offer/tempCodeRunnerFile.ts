function minNum(num: number): number {
//     let arr = num
//         .toString()
//         .split('')
//         .map((c) => Number(c));
//     let visited = new Array(10);
//     function getMin(nums: number[]) {
//         let idx = -1;
//         for (let i = nums.length - 1; i >= 0; i--) {
//             let num = nums[i];
//             if (idx === -1 || (num < nums[idx] && !visited[num])) {
//                 visited[num] = 1;
//                 idx = i;
//             }
//         }
//         return idx;
//     }
//     let doGet = true;

//     while (doGet) {
//         let minIdx = getMin(arr),
//             min = arr[minIdx];

//         if (minIdx === -1) break;
//         for (let i = 0; i < arr.length; i++) {
//             if (min < arr[i]) {
//                 if (minIdx <= i) {
//                     doGet = true;
//                     break;
//                 }
//                 arr.splice(minIdx, 1);
//                 arr.splice(i, 0, min);
//             }
//         }
//     }

//     return Number(Number(arr.join('')));
// }

// let res = minNum(7024);
// console.log(res);
// res = minNum(1234);
// console.log(res);
