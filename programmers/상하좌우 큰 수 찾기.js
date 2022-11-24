function solution(arr1){
  let n = arr1.length 

  let col = [-1, 0, 1, 0] 
  let row = [0, 1, 0, -1] 

  for(let i = 0; i < n; i++ ) {
      for (let j = 0; j < n; j++) { 
          let flag = 1 
          for(let k = 0; k < 4; k++) { 
              let colgo = i + col[k]; 
              let rowgo = j + row[k]; 
              if(colgo >= 0 && colgo < n && rowgo >= 0 && rowgo < n 
                && arr1[colgo][rowgo] >= arr1[i][j]) { 
                 flag = 0 
                 break 
              }  
          }
          if(flag) { arr1[i][j] = "*"} 
      }
  }

  let output = ''
  for (let i = 0; i < 5; i++ ) {
    for (let k = 0; k < 5; k++){
      output += arr1[i][k] 
      output += ' ' 
    }
    output += '\n'
  }
  return output
}
console.log(solution([[7,4,6,5,9], [6,1,3,4,5], [4,8,5,6,9], [1,3,0,6,4], [6,4,8,1,7]]))

//---------------코드
function solution(arr1){

  let n = arr1.length 
  let col = [-1, 0, 1, 0] 
  let row = [0, 1, 0, -1] 

  for(let i = 0; i < n; i++ ) {
      for (let j = 0; j < n; j++) { // 행과 열을 확인하기 위해 이중 반복문 돌림 
          let flag = 1 // flag true, 상하좌우 비교해서 최대인지 확인하기 위함
          for(let k = 0; k < 4; k++) { // 상하좌우 4번 비교해야하기 때문에 3까지 돌림(인덱스)
              let colgo = i + col[k]; // 가려고하는 방향 행 좌표 
              let rowgo = j + row[k]; // 가려고하는 방향 열 좌표
              if(colgo >= 0 && colgo < n && rowgo >= 0 && rowgo < n // 상하좌우가 네 방향으로 존재하지 않는 경우를 제하기 위함
              // 0보다 크거나 같거나 5보다 작으면 비교하지 않는다
                && arr1[colgo][rowgo] >= arr1[i][j]) { // 상하좌우좌표 >= 현재지점좌표 비교
                 flag = 0 // 만약 큰 수가 있으면 false한다
                 break // k for문 멈춤
              }  
          }
          if(flag) { arr1[i][j] = "*"} // 만약 flag가 true라면 기준점을 *로 바꾼다.
          
      }
  }
  //값 출력하기(별찍기 응용)
  let output = ''
  for (let i = 0; i < 5; i++ ) {
    for (let k = 0; k < 5; k++){
      output += arr1[i][k] // outputArr의 숫자 넣어주기
      output += ' ' // 공백 넣어주기
    }
    output += '\n' // 줄바꿈하기
  }
  return output
}

//let arr1=[[7,4,6,5,9], [6,1,3,4,5], [4,8,5,6,9], [1,3,0,6,4], [6,4,8,1,7]]; 
console.log(solution([[7,4,6,5,9], [6,1,3,4,5], [4,8,5,6,9], [1,3,0,6,4], [6,4,8,1,7]]))

//---------------예전 풀이

// function solution(arr){
//   //별 찍어주기
//   let n = arr.length 

//   let col = [-1, 0, 1, 0]
//   let row = [0, 1, 0, -1] 
//   let newArr = [] 

//   for(let i = 0; i < n; i++ ) {
//       for (let j = 0; j < n; j++) { 
//           let flag = 1 
//           for(let k = 0; k < 4; k++) { 
//               let colgo = i + col[k]
//               let rowgo = j + row[k]
//               if(colgo >= 0 && colgo < n && rowgo >= 0 && rowgo < n && arr[colgo][rowgo] >= arr[i][j]){ 
//                   flag = 0 
//                   break
//               }  
//           }
//           if(flag) {newArr.push("*")}
//           else { newArr.push(arr[i][j])} 
//       }
//   }
//   //newArr=["*", 4, "*", 5, "*", 6, 1, 3, 4, 5, 4, "*", 5, 6, "*", 1, 3, 0, 6, 4, "*", 4, "*", 1, "*"]


//   //2차원 배열 생성
//   let outputArr = []
//   for(var i=0; i<5; i++) {
//     outputArr[i] = [] // 행을 만들어준다
//     for(var j=0; j<5; j++){
//       outputArr[i][j] // 열을 만들어준다
//     }
    
//   }

//   //2차원 배열 값 넣기
//   outputArr[0].push(newArr[0],newArr[1],newArr[2],newArr[3],newArr[4])
//   outputArr[1].push(newArr[5],newArr[6],newArr[7],newArr[8],newArr[9])
//   outputArr[2].push(newArr[10],newArr[11],newArr[12],newArr[13],newArr[14])
//   outputArr[3].push(newArr[15],newArr[16],newArr[17],newArr[18],newArr[19])
//   outputArr[4].push(newArr[20],newArr[21],newArr[22],newArr[23],newArr[24])
//   //outputArr=[["*", 4, "*", 5, "*"], [6, 1, 3, 4, 5], [4, "*", 5, 6, "*"], [1, 3, 0, 6, 4], ["*", 4, "*", 1, "*"]]
  
//   //값 출력하기(별찍기 응용)
//   let output = ''
//   for (let i = 0; i < 5; i++ ) {
//     for (let k = 0; k < 5; k++){
//       output += outputArr[i][k] 
//       output += ' ' 
//     }
//     output += '\n' 
//   }
//   return output
// }
// let arr1=[[7,4,6,5,9], [6,1,3,4,5], [4,8,5,6,9], [1,3,0,6,4], [6,4,8,1,7]]; 
// console.log(solution(arr1))
//
// i=0, j=0
// colgo = -1 행
// rowgo = 0 열
// 1 [-1][0]
// [0][1]
// [1][0]
// [0][-1]
// col = 0 , row = 1

