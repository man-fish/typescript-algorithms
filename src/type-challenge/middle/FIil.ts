// import { GreaterThan } from './Greater';

type Fill<
    T,
    I,
    S extends number = 0,
    E extends number = 0,
    _C extends number[] = [],
    _D extends number[] = []
> = GreaterThan<S, E> extends false ? _C['length']  S : T;

type MAKE<
    T extends any,
    N extends number,
    _R extends T[] = []
> = _R['length'] extends N ? _R : MAKE<T, N, [..._R, T]>;

type T1 = MAKE<1, 0>;
