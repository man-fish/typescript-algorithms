// !pass
export type OptionalKeys<T> = ExtractOptionalKeys<T, keyof T>;
type ExtractOptionalKeys<T, K> = K extends keyof T
    ? {} extends Pick<T, K>
        ? K
        : never
    : never;

type Result = OptionalKeys<{
    foo: number;
    bar?: string;
    zcc: string;
    xyy?: string;
}>;
// expected to be "bar" | "xyy"
