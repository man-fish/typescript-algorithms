// // // function* gen() {
// // //     console.log(0);
// // //     let res = (yield console.log(1)) as 1;
// // //     console.log(res);
// // //     return 1;
// // // }

// // let g = gen();
// // g.next(1);
// // g.next();
// const g = function* (x: number, y: number) {
//     let result = (yield x + y) as number;
//     // let x = yield 2;

//     return result;
// };

// const gen = g(1, 2);
// console.log(gen.next()); // Object {value: 3, done: false}
// gen.next(0)); // Object {value: 0, done: false}
// console.log(gen.next(1)); // Object {value: 1, done: true}

// // // let g = gen();
// // // // @ts-ignore
// // // console.log(g.next(1));
// // // // @ts-ignore
// // // console.log(g.next(1));
// // // // @ts-ignore
// // // console.log(g.next(1));
// // // // @ts-ignore
// // // console.log(g.next(1));
// // // // @ts-ignore
// // // console.log(g.next(1));
// // function* gen(): Generator<1 | 2 | 3, 1, { a: 1 }> {
// //     yield 1;
// //     yield 2;
// //     yield 3;
// //     return 1 as const;
// // }
// // // 参数是逆变的
// // function* gengen() {
// //     yield* gen();
// //     let bar = (yield 1) as { b: 2 };
// //     console.log(bar);
// //     return 1;
// // }

// // type _ = 1 | undefined;
// // type _ = 1 & undefined;

// // let g = gen();
// // g.next(1);
// // // function* gengen() {
// // //     const res = yield* gen();
// // //     yield 4;
// // //     return res;
// // // }
// // let g: any;

// // for (let i of gen()) {
// //     g = i;
// //     console.log(i);
// // }

// // console.log(g.next());
// // // console.log(g.next());
// // // console.log(g.next());
// // // console.log(g.return(1));
// // // console.log(g.next());
