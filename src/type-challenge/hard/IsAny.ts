//!pass
export type IsAny<T> = helper<T> extends false ? false : true;
type helper<T> = T extends unknown
    ? unknown extends T
        ? T extends string
            ? true
            : false
        : false
    : false;

// theory
type T1 = any extends unknown ? true : false;
type T2 = unknown extends any ? true : false;
type T3 = any extends string ? true : false;
type T4 = unknown extends string ? true : false;

// Test
type S1 = IsAny<any>;
type S2 = IsAny<string>;
type S3 = IsAny<number>;
type S4 = IsAny<void>;
type S5 = IsAny<null>;
type S6 = IsAny<undefined>;
type S7 = IsAny<unknown>;
type S8 = IsAny<never>;
type S9 = IsAny<() => {}>;
type S10 = IsAny<{}>;
type S11 = IsAny<[]>;

type ST = S1;
type SF = S2 | S3 | S4 | S5 | S6 | S7 | S8 | S9 | S10 | S11;

enum Human {
    Man = 1,
    Woman = 'woman',
}

const earth = {
    people: 'woman',
} as const;

console.log(earth.people === Human.Woman);
const isWoman = (person: Human.Woman) => person === Human.Woman;

const wn = 'woman' as Human.Woman;
isWoman(wn);

enum ButtonSize {
    BG = 'bg',
    SM = 'sm',
}
interface ButtonProps {
    size: ButtonSize;
}

function Button(props: ButtonProps) {
    if (props.size === ButtonSize.BG) {
        return 'big button';
    } else {
        return 'smaill button';
    }
}

Button({ size: 'sm' as ButtonSize });
