function solution(star){
  let output = '' 

  for (let i = 0; i < star; i++ ) { //맨 위 반복문으로 줄을 설정한다.
    for (let k = 0; k < star - i; k++){
      output += ' ' //공백을 넣어주기 위한 줄. 0부터 star-i까지 공백을 추가한다. i가 증가할수록 공백이 줄어든다.
    }
    for (let j = 0; j < 2 * i + 1; j++) { 
      output += '*' //별을 홀수개로 찍어준다. i가 늘어날수록 별 갯수가 증가한다.
    }
    output += '\n' //줄바꿈을 해준다. 줄바꿈은 한번만 해주면 되기 때문에 줄 설정 반복문 안에 있는다.
  }

  console.log (output)

}
let star= 9;
solution(star)



function solution(star){
  let output = '' 

  for (let i = 0; i < star; i++ ) { 
    for (let k = 0; k < star - i; k++){
      output += ' ' 
    }
    for (let j = 0; j < 2 * i + 1; j++) { 
      output += '*' 
    }
    output += '\n' 
  }

  console.log (output)

}
let star= 9;
solution(star)



