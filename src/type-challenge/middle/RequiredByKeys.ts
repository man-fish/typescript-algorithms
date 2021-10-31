// TODO
export type RequiredByKeys<T, P extends keyof T> = {
    [K in keyof T as K extends P ? never : K]: T[K];
} &
    {
        [K in P]-?: T[P];
    };

interface User {
    name?: string;
    age?: number;
    address?: string;
}

type UserPartialName = RequiredByKeys<User, 'name'>; // { name: string; age?: number; address?: string }
