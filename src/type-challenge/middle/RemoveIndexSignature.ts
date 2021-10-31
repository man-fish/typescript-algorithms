// TODO
type FFF = {
    [key: string]: any;
    foo(): void;
};

type dis<T> = [T] extends [any] ? T : never;
type tt = dis<keyof FFF>;

type j = RemoveIndexSignature<FFF>; // expected { foo(): void }

// your answers
type RemoveIndexSignature<T> = {
    [K in keyof T as string extends K
        ? never
        : number extends K
        ? never
        : symbol extends K
        ? never
        : K]: T[K];
};

interface Base {}
class Higher implements Base {}
let h = new Higher();
type S_ = string | '';
type B_ = boolean | true;
type N_ = number | 1;
type BI_ = bigint | 1n;
type ARR_ = Array<any> | Array<number>;
type CombinaBH = object | {};

interface StringArray {
    [index: number]: string;
    [index: string]: string;
}
interface StringMap {
    [propName: string]: any;
    foo(): void;
}

type kk = {
    [K in keyof StringMap]: K;
};
type a = keyof StringArray;
