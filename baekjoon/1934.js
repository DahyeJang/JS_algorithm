var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().split("\n");

// input = 3
// 1 45000
// 6 10
// 13 17

let T = Number(input[0]);

let answer = [];
for (let i = 1; i <= T; i++) {
  let x = Number(input[i].split(" ")[0]); //1
  let y = Number(input[i].split(" ")[1]); //45000
  let common = gcd(x, y);
  answer.push((x * y) / common);
}

function gcd(a, b) {
  let tmp;
  while (b != 0) {
    tmp = a % b;
    a = b;
    b = tmp;
  }
  return a;
}

console.log(answer.join("\n").trim());
