const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString();

// const input = `123 45`;
const a = input.split(" ");

const A = a[0].split("");
const B = a[1].split("");

let result = 0;
for (let i = 0; i < A.length; i++) {
  for (let j = 0; j < B.length; j++) {
    result += A[i] * B[j];
    // console.log(A[i] + "x" + B[j]);
  }
}

console.log(result);
