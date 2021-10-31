/**
 Do not return anything, modify board in-place instead.
 */
export function solveSudoku(board: string[][]): void {
    // 状态数组；
    let rows = new Array(9).fill(0);
    let cols = new Array(9).fill(0);
    let squares = new Array(9).fill(0);
    // 记录给定数独棋盘信息；
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] !== '.') {
                let num = Number.parseInt(board[i][j]);

                rows[i] = record(rows[i], num);
                cols[j] = record(cols[j], num);

                let areaId = flatten(i, j);
                squares[areaId] = record(squares[areaId], num);
            }
        }
    }

    let isOver = false;

    function dfs(i: number, j: number) {
        // 前置判断；
        if (board[i][j] !== '.') {
            if (i === 8 && j === 8) {
                isOver = true;
                return;
            }
            dfs(...nextCoordinate(i, j));
            return;
        }
        // 状态缓存；
        let prevR = rows[i],
            prevC = cols[j],
            areaId = flatten(i, j),
            prevS = squares[areaId];

        for (let num = 1; num <= 9; num++) {
            // 剪枝函数；
            if (!has(prevR, num) && !has(prevC, num) && !has(prevS, num)) {
                // 记录当前棋盘信息；
                board[i][j] = num + '';
                if (i === 8 && j === 8) {
                    // 条件满足，返回并避免状态重置；
                    isOver = true;
                    return;
                }
                rows[i] = record(prevR, num);
                cols[j] = record(prevC, num);
                squares[areaId] = record(prevS, num);
                // 尝试下一个坐标；
                dfs(...nextCoordinate(i, j));

                if (isOver) break;
                // 如果下一个坐标无法解，进行状态重置；
                board[i][j] = '.';
                rows[i] = prevR;
                cols[j] = prevC;
                squares[areaId] = prevS;
            }
        }
    }

    dfs(0, 0);
}

// 将 9 x 9 的坐标系分为九个区域返回给定坐标所在的区域序号；
function flatten(i: number, j: number): number {
    return ((i / 3) | 0) * 3 + ((j / 3) | 0);
}

// 在 9 x 9 的坐标系里以先行后列的顺序获取下一个坐标；
function nextCoordinate(i: number, j: number): [number, number] {
    return [(i + j / 8) | 0, (j + 1) % 9];
}
// bitmap 数据结构来进行状态压缩；
// 记录方法：
function record(bitmap: number, n: number): number {
    return bitmap | (1 << (n - 1));
}

// 检测方法：
function has(bitmap: number, n: number): boolean {
    return (bitmap & (1 << (n - 1))) !== 0;
}

// // test next coordinate
// for (let i = 0; i < 9; i++) {
//     for (let j = 0; j < 9; j++) {
//         console.log('cur', [i, j]);
//         console.log('next', nextCoordinate(i, j));
//     }
// }

// // test bitmap
// let bitmap = 0;
// bitmap = record(bitmap, 1);
// bitmap = record(bitmap, 9);

// console.log(has(bitmap, 1), has(bitmap, 9), has(bitmap, 2));

let board = [
    ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
];

solveSudoku(board);

function printBoard(board: string[][]) {
    for (let line of board) {
        console.log(line);
    }
}

printBoard(board);
