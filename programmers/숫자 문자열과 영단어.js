function solution(s) {
  let result = []
  const eng = ['zero', 'one', 'tw', 'th', 'fo', 'fi', 'si', 'se', 'ei', 'ni']
  const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  if (let i = 0; i<eng.length; i++) {
     s = s.replaceAll(eng[i], i)
  }
  return s;
}
let s = "one4seveneight"
console.log(solution("one4seveneight"))