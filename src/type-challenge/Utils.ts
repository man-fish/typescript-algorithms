type _Partial<T> = {
    [K in keyof T]+?: T[K];
};

type _Require<T> = {
    [K in keyof T]-?: T[K];
};

type _Readonly<T> = {
    +readonly [K in keyof T]: T[K];
};

//TODO
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};

interface CatInfo {
    age: number;
    breed: string;
}
function a() {}

type CatName = 'miffy' | 'boris' | 'mordred';

const cats: Record<CatName, CatInfo> = {
    miffy: { age: 10, breed: 'Persian' },
    boris: { age: 5, breed: 'Maine Coon' },
    mordred: { age: 16, breed: 'British Shorthair' },
};

type _Pick<T, K> = {
    [P in _Extract<keyof T, K>]: T[P];
};

type _Omit<T, K> = {
    [P in _Exclude<keyof T, K>]: T[P];
};

type _Exclude<T, U> = T extends U ? never : T;

type _Extract<T, U> = T extends U ? T : never;

interface Todo {
    title: string;
    description: string;
    completed: boolean;
}

type TodoPreview = _Pick<Todo, 'title' | 'completed'>;

type _NonNullable<T> = T extends null | undefined ? never : T;

type _Parameters<F> = F extends (...args: infer P) => any ? P : never;

declare function f1(arg: { a: number; b: string }): void;

type T3 = Parameters<typeof f1>;

type _ReturnType<F> = F extends (...args: never[]) => infer R ? R : never;

type T0 = ConstructorParameters<ErrorConstructor>;

type _ConstructorParameters<T extends abstract new (...args: any) => any> =
    T extends abstract new (...args: infer P) => any ? P : never;

/**
 * Obtain the return type of a constructor function type
 */
type _InstanceType<T extends abstract new (...args: any) => any> =
    T extends abstract new (...args: any) => infer R ? R : any;

interface fn {
    f(): void;
}
