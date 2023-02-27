var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString();
// let input = 189;

let a = 300; //5분
let b = 60; //1분
let c = 10; //10초

let aNumber = Math.floor(input / a);
input = input % a;

let bNumber = Math.floor(input / b);
input = input % b;

let cNumber = Math.floor(input / c);
input = input % c;

if (input === 0) {
  console.log(aNumber, bNumber, cNumber);
} else {
  console.log("-1");
}
