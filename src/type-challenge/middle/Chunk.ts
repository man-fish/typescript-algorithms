export type Chunk<T extends number[], S extends number> = S extends 0
    ? []
    : Helper<T, S>;

type Helper<
    T extends number[],
    S extends number,
    C extends number[] = []
> = T extends [infer H, ...infer R]
    ? C['length'] extends S
        ? [C, ...Helper<T, S, []>]
        : R extends number[]
        ? H extends number
            ? Helper<R, S, [...C, H]>
            : never
        : [...C, H]
    : [C];

// type T1<T extends number[]> = T extends [infer H, ...infer _]
//     ? OnlyNum<H>
//     : false;
// type OnlyNum<T extends number> = T;
// type T1_T1 = T1<[1]>;
// Do you know lodash? Chunk is a very useful function in it, now let's implement it. Chunk<T, N> accepts two required type parameters, the T must be a tuple, and the N must be an integer >=1

type exp1 = Chunk<[1, 2, 3], 2>; // expected to be [[1, 2], [3]]
type exp2 = Chunk<[1, 2, 3], 4>; // expected to be [[1, 2, 3]]
type exp3 = Chunk<[1, 2, 3], 1>; // expected to be [[1], [2], [3]]
type exp4 = Chunk<[], 1>; // expected to be [[]]
type exp5 = Chunk<[1, 2, 3], 0>; // expected to be []
