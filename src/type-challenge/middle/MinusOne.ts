// TODO
type PH = '_';

export type MinusOne<T extends number> = helper<[], T>;

type helper<T extends any[], U extends number> = [...T, PH]['length'] extends U
    ? T['length']
    : helper<[...T, PH], U>;

type Zero = MinusOne<1>; // 0
type FiftyFour = MinusOne<3>; // 2
type TEN = MinusOne<41>; // 0
type FortyFive = MinusOne<46>; // 45

type FortySix = MinusOne<47>; // Error: Type instantiation is excessively deep and possibly infinite.
