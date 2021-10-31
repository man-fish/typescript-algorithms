// TODO
export type RequiredKeys<T> = ExtractRequiredKeys<T, keyof T>;
type ExtractRequiredKeys<T, K> = K extends keyof T
    ? T extends { [k in K]: T[K] }
        ? K
        : never
    : never;

type Result = RequiredKeys<{
    foo: number;
    bar?: string;
    zcc: string;
    xyy?: string;
}>;
// expected to be “foo”
