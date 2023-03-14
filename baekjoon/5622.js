// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString();

const input = `WA`;
//ABC = 3, def=4, ghi=5, jkl=6, mno=7, pqrs=8, tuv=9, wxyz=10,

const a = input.split("");
let time = 0;
for (let i = 0; i < a.length; i++) {
  if ("ABC".includes(a[i])) {
    time += 3;
  } else if ("DEF".includes(a[i])) {
    time += 4;
  } else if ("GHI".includes(a[i])) {
    time += 5;
  } else if ("JKL".includes(a[i])) {
    time += 6;
  } else if ("MNO".includes(a[i])) {
    time += 7;
  } else if ("PQRS".includes(a[i])) {
    time += 8;
  } else if ("TUV".includes(a[i])) {
    time += 9;
  } else if ("WXYZ".includes(a[i])) {
    time += 10;
  }
}

console.log(time);
