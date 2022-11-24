// 숫자로 계산하는 방법

function solution(n, lost, reserve) {

  let arr = Array(n).fill(1) //학생 수만큼 1의 배열을 만듦 //[1, 1, 1, 1, 1]

   // 체육복을 도난당한 학생들의 체육복 수를 0으로
    lost.map((lost) => arr[lost-1] = 0) //lost 배열에서 map함수를 쓰고, arr가 lost요소 -1만큼 0으로 바꿔준다.
    //[1, 0, 1, 0, 1]
    // 배열 요소를 바꿀 때 map함수로 이런식으로 바꿀 수 있다!
    
    // 여벌을 가지고 있는 학생들의 체육복 수 1 증가
    reserve.map(reserve => arr[reserve-1] += 1)
    //[2, 0, 2, 0, 2]
    //map을 쓰면 arr함수 자체가 바뀜

    for (let i = 0; i < n; i++) {
        // 체육복이 0개인 학생 앞사람에게 체육복이 2개가 있다면  
        if (arr[i] === 0 && arr[i-1] === 2) { //배열[음수인덱스]는 undefined가 뜸. 이 값으로 비교하는것임. undefined === 2임.
            arr[i] = 1 // 체육복 하나 주고
            arr[i-1] = 1 // 앞사람 체육복 하나를 없앤다(1로 만듦)
        }

        // 체육복이 0개인 학생이 뒷사람한테 받아왔을 때 
        else if (arr[i] === 0 && arr[i+1] === 2) {
            arr[i] = 1
            arr[i+1] = 1
        }
    }
    
    // 체육복이 한개 이상인 학생들의 수
    return arr.filter(i => i > 0).length
}


console.log(solution(5, [2,4], [1, 3, 5]))

// let n = 5
//   let lost = [2,4]
//   let reserve = [1, 3, 5]

// 전체 학생 수 n / 
// 체육복을 도난당한 학생들의 번호 배열 lost / 
// 여벌 체육복이 있는 학생들의 번호 배열 reserve 
// **return** : 체육수업을 들을 수 있는 학생의 최대값



// 다 0
// 도난당함 -1
// 있으면 +1

// //true,false로 계산하는 방법
// function solution(n, lost, reserve) {

//   let arr = Array(n).fill(true) //[1, 1, 1, 1, 1]

//    // 체육복을 도난당한 학생들의 체육복 수를 0으로
//     lost.map((lost) => {arr[lost-1] = false}) //lost 배열에서 map함수를 쓰고, arr가 lost요소 -1만큼 0으로 바꿔준다.
//     // [1, 0, 1, 0, 1]
//     // 배열 요소를 바꿀 때 map함수로 이런식으로 바꿀 수 있다!
    
//     // 여벌을 가지고 있는 학생들의 체육복 수 1 증가
//     reserve.map(reserve => {arr[reserve-1] += 1})
//     //[2, 0, 2, 0, 2]
//     //map을 쓰면 arr함수 자체가 바뀜

//     for (let i = 0; i < n; i++) {
//         // 체육복이 0개인 학생 앞사람에게 체육복이 2개가 있다면  
//         if (arr[i] === 0 && arr[i-1] === 2) { //배열[음수인덱스]는 undefined가 뜸. 이 값으로 비교하는것임. undefined === 2임.
//             arr[i] = 1 // 체육복 하나 주고
//             arr[i-1] = 1 // 앞사람 체육복 하나를 없앤다(1로 만듦)
//         }

//         // 체육복이 0개인 학생이 뒷사람한테 받아왔을 때 
//         else if (arr[i] === 0 && arr[i+1] === 2) {
//             arr[i] = 1
//             arr[i+1] = 1
//         }
//     }
//     // 체육복이 한개 이상인 학생들의 수
//     return arr.filter(i => i > 0).length
// }


// solution(5, [2,4], [1, 3, 5])