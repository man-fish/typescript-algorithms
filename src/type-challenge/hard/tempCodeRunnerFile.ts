// TODO
// // type SPACE = ' ';

// // type CapitalizeWords<T extends string> =
// //     T extends `${infer H}${SPACE}${infer R}`
// //         ? `${Capitalize<H>}${SPACE}${CapitalizeWords<R>}`
// //         : `${Capitalize<T>}`;

// type CapitalizeRest<S extends string> = S extends `${infer F}${infer R}`
//     ? `${F}${CapitalizeRest<
//           Uppercase<F> extends Lowercase<F> ? Capitalize<R> : R
//       >}`
//     : S;
// type CapitalizeWords<S extends string> = Capitalize<CapitalizeRest<S>>;

// type capitalized = CapitalizeWords<'hello world'>; // expected to be 'Hello World, My Friends'