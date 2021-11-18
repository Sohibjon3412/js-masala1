let a = 765;

let b = a % 10;
let c = (a - b) % 100;
let x = (a - c - b) / 100;
let y = b * 100 + c + x;
console.log(y);