// base thorety
// TODO
type T1 = { foo: number; bar: string };
type br = T1['bar'];

type T2 = { foo: number } extends T1 ? true : false; // true
type T3 = { bar: number } extends T1 ? true : false; // false

export type GetRequired<T> = {
    [K in ExtractRequiredKeys<T, keyof T>]: T[K];
};

export type ExtractRequiredKeys<T, K> = K extends keyof T
    ? { [k in K]: T[K] } extends T
        ? K
        : never
    : never;

type K = ExtractRequiredKeys<T1, keyof T1>;

type I = GetRequired<{ foo: number; bar?: string }>; // expected to be { foo: number }

type br = T1['bar'];

// type GetRequired<T> = {
//     [P in keyof T as T[P] extends Required<T>[P] ? P : never]: T[P];
// };
