export type Make<
    T extends any,
    N extends number,
    _R extends T[] = []
> = _R['length'] extends N ? _R : MAKE<T, N, [..._R, T]>;

type T1 = MAKE<1, 0>;
type T2 = MAKE<1, 10>;
