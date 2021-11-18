let a = 230;

let b = Math.trunc(a / 100);
let c = a % 10;
let d = Math.trunc(a % 100 / 10);
let e = b + c + d;
let f = b * c * d;

console.log(e, f);