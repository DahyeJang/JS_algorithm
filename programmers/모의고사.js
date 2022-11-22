function solution(answers) {
  let one = [1, 2, 3, 4, 5]
  let two = [2, 1, 2, 3, 2, 4, 2, 5]
  let three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
  // 번호에 루틴(반복)이 있다. 그것을 적어줘라
  let result = [0, 0, 0] // 맞춘 갯수 넣는 배열
  let result2 = [] // 빈배열
  for (let i = 0; i < answers.length; i++) {
      if (one[i % 5] === answers[i]) result[0]++
      if (two[i % 8] === answers[i]) result[1]++
      if (three[i % 10] === answers[i]) result[2]++
    } // 정답이 같으면, 점수를 올려준다
  
  let maxScore =  Math.max(...result) // 점수중에 제일 잘 나온 점수를 최고점수라 한다 ...result를 쓰면 배열에서도 쉽게 구할 수 있음
  for (let i = 0; i < 3; i++) {
     if ( maxScore === result[i] ) { // 맥스스코어가 같으면
         result2.push(i+1) //빈배열에 +1해서 넣어주기
     }
  }
  return result2
  }
  