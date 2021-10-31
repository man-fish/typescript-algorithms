// !pass
export type RequiredKeys<T> = ExtractRequiredKeys<T, keyof T>;
type ExtractRequiredKeys<T, K> = K extends keyof T
    ? {} extends Pick<T, K>
        ? never
        : K
    : never;

type Result = RequiredKeys<{
    foo: number;
    bar?: string;
    zcc: string;
    xyy?: string;
}>;
// expected to be “foo”
