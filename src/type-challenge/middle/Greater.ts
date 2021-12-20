export type GreaterThan<
    A extends number,
    B extends number,
    _A extends number[] = [],
    _B extends number[] = []
> = _A['length'] extends A
    ? false
    : _B['length'] extends B
    ? true
    : GreaterThan<A, B, [..._A, 1], [..._B, 1]>;

type T1 = GreaterThan<2, 1>; //should be true
type T2 = GreaterThan<1, 1>; //should be false
type T3 = GreaterThan<3, 2>; //should be true
type T4 = GreaterThan<1, 3>; //should be false
