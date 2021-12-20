export type StringToTuple<T extends string> = T extends `${infer F}${infer R}`
    ? [F, ...StringToTuple<R>]
    : [];

export type IsPalindromeTuple<T extends any[]> = T extends [
    infer F,
    ...infer M,
    infer E
]
    ? F extends E
        ? IsPalindromeTuple<M>
        : false
    : true;

export type IsPalindrome<T> = T extends string | number
    ? IsPalindromeTuple<StringToTuple<`${T}`>>
    : false;

type _test1 = IsPalindrome<'abc'>; // false
type _test2 = IsPalindrome<12>; // true
