export const SchoolName: string;
export function getTeacher(name: string, gride: Gride): string;
export class Student {
    name: string;
    constructor(name: string);
}
export enum Gride {
    One = 'bob',
    Two = 'jack',
    Three = 'jacky',
}
export interface Teacher {
    name: string;
}

export type SchoolMember = Teacher | Student;

declare namespace school {
    const SchoolName: string;
    function getTeacher(name: string, gride: Gride): string;
    class Student {
        name: string;
        constructor(name: string);
    }
    enum Gride {
        One = 'bob',
        Two = 'jack',
        Three = 'jacky',
    }
    interface Teacher {
        name: string;
    }

    type SchoolMember = Teacher | Student;
}

// declare const SchoolName: string;
// export default SchoolName;
// export default function getTeacher(name: string, gride: Gride): string;
// export default class Student {
//     name: string;
//     constructor(name: string);
// }
// declare enum Gride {
//     One = 'bob',
//     Two = 'jack',
//     Three = 'jacky',
// }
// export default Gride;
// export default interface Teacher {
//     name: string;
// }

// type SchoolMember = Teacher | Student;
// export default SchoolMember;

// declare const SchoolName: string;
// declare function getTeacher(name: string, gride: Gride): string;
// declare class Student {
//     name: string;
//     constructor(name: string);
// }
// declare enum Gride {
//     One = 'bob',
//     Two = 'jack',
//     Three = 'jacky',
// }
// interface Teacher {
//     name: string;
// }

// type SchoolMember = Teacher | Student;

// export { SchoolMember, Teacher, getTeacher, Student, Gride, SchoolName };
