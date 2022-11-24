//let strings = ["sun", "bed", "car"]
//let n = 1 // 인덱스 숫자

function solution(strings, n) {

  let sortStrings = strings.sort() // 처음부터 오름차순 정렬해줌. 그럼 나중에 같은 알파벳이 나왔을 때 또다시 정렬할 필요가 없기 때문
  let newArr = []
  for (let i = 0; i < sortStrings.length; i++) {
    newArr.push([sortStrings[i], sortStrings[i][n]]) // ['sun', 'u'] 이런식으로 정렬
  }
  
  //let arrSort = newArr.sort((a, b) => a[1] - b[1]) // 안됌. 숫자만 되는듯
  let arrSort = newArr.sort((a, b) => a[1].localeCompare(b[1])) // 1번째 인덱스대로 정렬 //String 객체의 내장 메서드로, 정렬 순서에서 앞에 오는지, 뒤에 오는지 그 여부를 반환하는 메서드
// ['car', 'a']
// ['bed', 'e']
// ['sun', 'u']

  return arrSort.map((x) => x[0])
}

