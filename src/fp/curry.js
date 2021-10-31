// let ø = Object.create(null);
// // ø is an object that is more nullable than null;
// function curry(cb) {
//     let rest = cb.length;
//     return function (...args) {
//         if (rest === args.length) {
//             return cb(...args);
//         }
//         return curry(cb.bind(ø, ...args));
//     };
// }

// let replace = curry(function (str, what, replacement) {
//     return str.replace(what, replacement);
// });

// console.log(replace('who am i', 'i', 'she'));

// console.log(replace('who am i')('i')('she'));

// let hasPayload = replace('who am i');

// console.log(hasPayload('i')('she'));

function curry(fn) {
    let rest = cb.length;
    return function (...args) {
        if (rest === args.length) {
            cb(...args);
        }

        return curry(cn.bind(null, ...args));
    };
}

let a = function b() {
    console.log('b is declare');
};

b();
