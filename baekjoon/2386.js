let fs = require("fs");
// let input = fs.readFileSync("dev/stdin").toString();
let input =
  "g Programming Contest\nn New Zealand\nx This is quite a simple problem.\n#";

let s = input.split("\n");
let count = s.length;
s = s.splice(0, count - 1);

for (let i = 0; i < s.length; i++) {
  let answer = 0;
  let string = s[i];
  let alphabet = string[0];
  let stringList = string.slice(1, string.length).toLowerCase();

  for (let j = 0; j < stringList.length; j++) {
    if (alphabet === stringList[j]) {
      answer++;
    }
  }
  console.log(alphabet, answer);
}
