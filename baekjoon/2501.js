var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString();
// let input = "2735 1";

let result = "";
let N = input.split(" ")[0];
let K = input.split(" ")[1];

let primes = [];
for (let i = 1; i <= N; i++) {
  if (N % i === 0) primes.push(i);
}

if (primes.length < K) result = 0;
else result = primes[K - 1];

console.log(result);
