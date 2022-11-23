//let strings = ["sun", "bed", "car"]
//let n = 1 // 인덱스 숫자

function solution(strings, n) {

  let sortStrings = strings.sort() 
  let newArr = []
  for (let i = 0; i < sortStrings.length; i++) {
    newArr.push([sortStrings[i], sortStrings[i][n]]) // ['sun', 'u']
  }
  
  //let arrSort = newArr.sort((a, b) => a[1] - b[1]) // 안됌. 숫자만 되는듯
  let arrSort = newArr.sort((a, b) => a[1].localeCompare(b[1])) // 1번째 인덱스대로 정렬 //String 객체의 내장 메서드로, 정렬 순서에서 앞에 오는지, 뒤에 오는지 그 여부를 반환하는 메서드
// ['car', 'a']
// ['bed', 'e']
// ['sun', 'u']

  return arrSort.map((x) => x[0])
}

