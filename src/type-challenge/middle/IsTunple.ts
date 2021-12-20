// !DONE
export type IsTuple<T> = T extends readonly any[]
    ? number extends T['length']
        ? false
        : true
    : false;

type case1 = IsTuple<[number]>; // true
type case2 = IsTuple<readonly [number]>; // true
type case3 = IsTuple<number[]>; // false

type T1 = readonly [number, string];
type A1 = number[];

type T1_T1 = T1['length'];

type A1_T1 = A1['length'];

type T1_T2 = T1 extends (infer I)[] ? (T1 extends I[] ? true : false) : never;

type T1_T3 = T1 extends any[] ? true : false;

type N1_T1 = number extends 1 ? true : false;

type N1_T3 = number extends number ? true : false;

type A1_T2 = readonly any[] extends any[] ? true : false;
type A1_T3 = any[] extends readonly any[] ? true : false;
type a = { readonly a: 1 };

type ra = { a: 1 } extends a ? true : false;

interface Foo {
    readonly a: number;
}

class Bar {
    a: number = 0;
}

type TT = { readonly a: 1 } extends Foo ? true : false;

let a: readonly number[] = [1, 2, 3];
// a.push(1);
// a[0] = 2;
