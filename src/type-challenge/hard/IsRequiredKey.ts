export type isRequiredKey<T, K extends string & keyof T> = Record<
    keyof T,
    string
>[K] extends Record<string & keyof T, string>[K]
    ? true
    : false;

export type filterOptional<T> = string & keyof T;

// T[K] extends Required<T>[K]
//     ? true
//     : false;

type objType = {
    foo: string;
    bar?: string;
};

type res = isRequiredKey<objType, 'bar'>;

type A = string | null extends string ? true : false;

type B = {
    foo?: string;
};

type C = {
    foo: string | null;
};

type isAeB = A extends B ? true : false; // true
type isBeA = B extends A ? true : false; // false
type isAeC = A extends C ? true : false; // true
type isCeA = C extends A ? true : false; // false
