var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString();

let numbers = line.split(" ");
let a = parseInt(numbers[0]);
let b = parseInt(numbers[1]);
console.log(a + b);
