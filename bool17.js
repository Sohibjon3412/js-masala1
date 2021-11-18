let a = 101;


let b = Math.trunc(a / 100);
let c = a % 10;
let d = Math.trunc(a / 10 % 10);

let x = b + c + d;
let z = x % 2 != 0;

console.log(z);