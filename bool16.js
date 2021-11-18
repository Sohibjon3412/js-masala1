let a = 32;

let b = Math.round(a / 10);
let c = a % 10;
let d = b + c;

let x = d % 2 != 0;

console.log(x);