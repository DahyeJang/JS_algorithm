function solution(s, n) {
  const alpha =
    "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ                          ";
  return s
    .split("")
    .map((e) => alpha[alpha.indexOf(e) + n])
    .join("");
}
console.log(solution("a B z", 4));
