var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().split("\n");
let N = input[0];
let score = input[1].split(" ");
// let N = 3; //시험 본 과목 수
// let scorebasic = "10 20 30"; // 시험 점수
// let score = scorebasic.split(" ");
let newScore = score.sort((a, b) => b - a); //시험 점수 오름차순

const M = newScore[0];
const reScore = newScore.map((score) => (score / M) * 100);

let sum = 0;
for (let i = 0; i < N; i++) {
  sum += reScore[i];
}

console.log(sum / N);
