// !pass
export type GetOptional<T> = {
    [K in keyof T as {} extends Pick<T, K> ? K : never]: T[K];
};

type Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};

type I = GetOptional<{ foo: number; bar?: string }>; // expected to be { bar?: string }
