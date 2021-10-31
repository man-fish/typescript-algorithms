// !pass
export type GetRequired<T> = {
    [K in keyof T as {} extends Pick<T, K> ? never : K]: T[K];
};

type Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};

type I = GetRequired<{ foo: number; bar?: string }>; // expected to be { foo: number }
// thoery
type _test1 = {} extends { foo: undefined } ? 1 : 2;
type _test2 = {} extends { foo?: string } ? 1 : 2;
