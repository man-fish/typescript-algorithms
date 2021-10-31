// TODO
export type PickByType<T, U> = {
    [K in Extract<keyof T, helper<T, keyof T, U>>]: T[K];
};

type helper<T, K, U> = K extends keyof T ? (T[K] extends U ? K : never) : never;

type obj = {
    name: string;
    count: number;
    isReadonly: boolean;
    isEnable: boolean;
};

type P1 = helper<obj, keyof obj, boolean>;

type OnlyBoolean = PickByType<
    {
        name: string;
        count: number;
        isReadonly: boolean;
        isEnable: boolean;
    },
    boolean
>; // { isReadonly: boolean; isEnable: boolean; }

type NoDistribution<T, K extends keyof T> = T[K] extends boolean ? T[K] : never;

type P3 = NoDistribution<obj, keyof obj>;
