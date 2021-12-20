// 若数组则类型报错
type ErrorIfArray<T> = T extends any[] ? '非数组类型' : T;
export const isNilString = (str: any): str is null | undefined | '' =>
    str === '' || str === null || str === undefined;

export function toArray<T>(
    value: ErrorIfArray<T>
): Exclude<ErrorIfArray<T>, undefined | null | ''>[] | undefined {
    if (isNilString(value)) {
        return undefined;
    }

    return [value as Exclude<ErrorIfArray<T>, undefined | null | ''>];
}

type TEST1 = ErrorIfArray<never[]>;

type isExtends = any[] extends [] ? true : false;

// console.log(toArray([])); error
