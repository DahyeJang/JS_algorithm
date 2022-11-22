function solution(n) {
  let arr = String(n).split('')
  let result = arr.sort((a, b) => b - a)
  return Number(result.join(''))
}

let n = 123;
console.log(solution(n))