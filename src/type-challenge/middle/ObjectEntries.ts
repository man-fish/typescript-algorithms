// TODO
export type ObjectEntries<T> = helper<T, keyof T>;

type helper<T, K extends keyof T> = K extends never ? never : [K, T[K]];

interface Model {
    name: string;
    age: number;
    locations: string[] | null;
}
type modelEntries = ObjectEntries<Model>; // ['name', string] | ['age', number] | ['locations', string[] | null];
