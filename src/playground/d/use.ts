import './jQuery';
import { Student, getTeacher, Gride, Teacher } from './npm';
// import { baz } from 'foo';
import * as foo from 'foo';

foo();
console.log(foo.baz);

let stu = new Student('jc');
let teachName = getTeacher(stu.name, Gride.One);
let teacher: Teacher = {
    name: teachName,
};

// $('fuck');

// $.ajax('/love', {
//     method: 'get',
// });

// let rFG: $.RequestConfig = {
//     method: 'get',
// };

// let gif: GIF = {};

enum Dict {
    A,
    B,
}
