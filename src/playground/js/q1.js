// function buildMap(n, edges) {
//     let map = new Array(n);
//     for (let [x, y] of edges) {
//         console.log(x, y, map[x - 1]);
//         map[x - 1] = map[x - 1] ? [...map[x - 1], y - 1] : [y - 1];
//         map[y - 1] = map[y - 1] ? [...map[y - 1], x - 1] : [x - 1];
//     }
//     console.log(map);

//     return map;
// }

// function switchEdges(map, switchPoints) {
//     for (let [x, y] of switchPoints) {
//         console.log(x, y);
//         [map[x - 1], map[y - 1]] = [map[y - 1], map[x - 1]];
//     }
// }

// function solution() {
//     // let line = read_line();
//     // let arr = line.split(' ');
//     // let n = parseInt(arr[0]);
//     // let m = parseInt(arr[1]);
//     // let q = parseInt(arr[2]);

//     // let edges = [];

//     // for (let i = 0; i < m; i++) {
//     //     line = read_line();
//     //     arr = line.split(' ');
//     //     edges.push([arr[0], arr[1]]);
//     // }

//     // let switchPoints = [];
//     // for (let i = 0; i < q; i++) {
//     //     line = read_line();
//     //     arr = line.split(' ');
//     //     switchPoints.push([arr[0], arr[1]]);
//     // }

//     let map = buildMap(5, [
//         [1, 2],
//         [2, 3],
//         [3, 4],
//         [4, 5],
//         [1, 4],
//     ]);

//     switchEdges(map, [
//         [2, 5],
//         [1, 2],
//         [3, 4],
//     ]);
//     console.log(map);
//     return map.map((item) => item.length);
// }

// console.log(solution());

function getSub(str) {
    if (Number(str) < 22) {
        return 0;
    }
    let res = 0;

    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
            let curNum = str.slice(i, j + 1);
            if (Number(curNum) % 22 === 0) {
                res++;
            }
        }
    }

    return res;
}

// console.log(getSub('12221'));

// function getAllCombination(n) {
//     if (n === 1) return 0;
//     let mem = new Map();
//     function helper(cur) {
//         if (cur === 0) return 1;
//         if (mem.has(cur)) {
//             return mem.get(cur);
//         }

//         let res = 0;
//         for (let step = 1; step <= 6 && cur >= step; step++) {
//             res += helper(cur - step);
//         }
//         mem.set(cur, res);
//         return res;
//     }
//     return helper(n - 1);
// }

// console.log(getAllCombination(10));

let job = new Promise((resolve) => {
    console.log('build promise');
    setTimeout(() => {
        resolve('give data');
    }, 1000);
});

job.then((res) => {
    console.log(1);
    console.log(res);
    return res;
});

job.then((res) => {
    console.log(2);
    console.log(res);
});

(async function testfn() {
    // throw 'async';
    // return 'async';
    await Promise.reject('async');
    // return 'un async';
})().then(
    (res) => {
        console.log(res);
    },
    (reason) => {
        console.log(reason);
    }
);
