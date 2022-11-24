function solution(arr1){
  let count = arr1.filter(element => 0 === element).length //배열에서 0의 숫자를 센다
  let nol = ['모', '도', '개', '걸', '윷'] //윷놀이 배열을 만든다. 인덱스 숫자와 맞추기 위해 이런 순서로 함.
	for (let i = 0; i < 6; i++) { //5까지 for문을 돌려서
    if ( count === i ) { //위에서 센 숫자와 i가 맞다면
      return nol[i] //윷놀이 배열의 i인덱스를 리턴한다
    }
  }
}
let arr1=[0,1,0,0]
console.log(solution(arr1))


// 배 0개 모
// 배 1개 도
// 배 2개 개
// 배 3개 걸
// 배 4개 윷


function solution(arr1){
  let count = arr1.filter(element => 0 === element).length 
  let nol = ['모', '도', '개', '걸', '윷'] 
	for (let i = 0; i < 6; i++) { 
    if ( count === i ) { 
      return nol[i] 
    }
  }
}
let arr1=[0,1,0,0]
console.log(solution(arr1))