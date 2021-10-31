// a.mjs
console.log(1);
import { bar } from './b.mjs';
console.log('a.mjs');
console.log(bar);
export let foo = 'foo';
