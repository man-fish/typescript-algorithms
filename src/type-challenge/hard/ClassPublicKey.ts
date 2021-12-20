// !pass
export type ClassPublicKeys<T> = helper<T, keyof T>;

type helper<T, K> = K extends keyof T
    ? T extends { [KK in K]: T[K] }
        ? K
        : never
    : never;

type Constructor<T> = new (...args: any[]) => T;
export type ClassPublicKeysSimple<T extends Constructor<T>> = keyof T;

class A {name: string = '1'; num: number = 1;}

type publicKyes = ClassPublicKeys<A>; // 'str' | 'getNum'


// @show-types
type AKey = keyof A;