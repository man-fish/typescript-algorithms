// TODO
export type OptionalKeys<T> = ExtractOptionalKeys<T, keyof T>;
type ExtractOptionalKeys<T, K> = K extends keyof T
    ? T extends { [k in K]: T[K] }
        ? never
        : K
    : never;

type Result = OptionalKeys<{
    foo: number;
    bar?: string;
    zcc: string;
    xyy?: string;
}>;
// expected to be “foo”
