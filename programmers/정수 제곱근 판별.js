function solution(n) {
  let jegop = Math.sqrt(n) //n의 제곱근을 구해준다(루트를 씌워줌)
  if (Number.isInteger(jegop)) { //제곱근이 정수라면
      return (jegop+1) * (jegop+1) //제곱근+1의 값을 제곱한다
  } else {
      return - 1 //아니면 -1을 리턴한다
  }
}

console.log(solution(121))
console.log("hi")