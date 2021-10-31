/** Alpha */
let Alpha = (x) => x + x;
// same as let Beta = (y) => y + y;
/** Beta */
let Beta = ((x) => x + x)(1);
// same a 1+1;
/** Eta */
let Eta = (x) => f(x);
// same as f;
