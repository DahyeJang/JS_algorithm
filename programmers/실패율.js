function solution(N, stages) {
  let failArr = []
  for (let i = 1; i < N+1; i++) { // i가 1일 때, 2, 3
    let failPeople = stages.filter(element => i === element).length //1명, 3명, 2명
    let arrivalPeople = stages.filter(element => i <= element).length // 8명
    failArr.push(failPeople/arrivalPeople) //1/8, 3/7, 2/4
  } // 실패율을 다 계산했어 // [0.125, 0.42857142857142855, 0.5, 0.5, 0]

  // let obj = {}
  // for ( let i = 0; i < failArr.length; i++) {
  //     obj.stagenum = i+1
  //     obj.failPer = failArr[i]
  //     return obj
  // } //키값을 스테이지넘버, 값을 실패율로 해줌

  let newFailArr = []
  for ( let i = 0; i < failArr.length; i++) {
    newFailArr.push({stagenum : i+1, failPer : failArr[i]})
  } // 0: {stagenum: 1, failPer: 0.125} 이런식으로 정렬

  let failSort = newFailArr.sort(function (a, b) {
    return b.failPer - a.failPer
  }) //실패율로 정렬


  let answer = failSort.map(element => element.stagenum)
  return answer;
}

let stages = [2, 1, 2, 6, 2, 4, 3, 3]	
let N = 5 //전체 스테이지 갯수