// function solution(n) { 
//   const s = new Set(); //Set 객체 생성 //중복을 제거한 값들의 집합
//   for(let i=1; i<=n; i+=2){
//       s.add(i); //n이 10일 때, 1,3,5,7,9 들어감(홀수만) 짝수는 소수가 될 수 없으므로
//   }
//   s.delete(1); //s에 1을 제거하고
//   s.add(2); //2를 추가한다
//   for(let j=3; j<Math.sqrt(n); j++){
//       if(s.has(j)){
//            for(let k=j*2; k<=n; k+=j){    
//               s.delete(k);
//            }
//       }
//   }
//   return s.size;
// }


// function solution(n) {
//   let answer = 0
 
//   for (let i = 2; i <= n; i++) {
//     if (isPrime(i) === true) {
//       answer++
//     } 
//   }
//   return answer
// }


// //소수 구하기
// const isPrime = function (n) {
//   for (let j = 2; j <= Math.sqrt(n); j++) { 
//     if (n % j === 0) {
//       return false
//     }
//   }
//   return true
// }

// console.log(solution(10))
// console.log(isPrime(4))

// 2345


// //solution(5)일 때

// answer = 0
// i = 2
// isPrime(2) == true
// answer = 1


// j=2



// function solution(n) {
//   let answer = 0

//   for (let i = 2; i <= n; i++) {
//     if (isPrime(i) === true) {
//       answer++
//     } 
//   }
//   return answer
// }


// //소수 구하기(제곱근으로 찾는 방법)
// const isPrime = function (n) {
//   for (let j = 2; j <= Math.sqrt(n); j++) { 
//     if (n % j === 0) {
//       return false
//     }
//   }
//   return true
// }



function solution (n) {
	let arr = Array(n + 1).fill(true)
  // Array(x) x 개수의 배열 생성
  // Array.fill(x) : x로 배열을 채워준다
  // index는 0에서 시작하므로 +1 해준다
  // n이 10이라면 [true, true, true, true, true, true, true, true, true, true, true]

    arr[0] = false
    arr[1] = false
    //배열의 index 0과 1은 소수가 아니므로 false로 만든다.
    //[false, false, true, true, true, true, true, true, true, true, true]

    for(let i = 2; i <= n; i++) { 
      //숫자까지 반복하는데
        if(arr[i]) { 
          //만약 arr의 i번째 인덱스가 true라면
          //2가 true면
            for(let j = i * i; j <= n; j += i) {
              //반복을 i * i 부터 시작하는 것은 i는 소수이기 때문이다. (자기자신 제외)
              //예를 들어 i가 2라면, 2는 소수이기 때문에 2*2 = 4부터 시작하고, 한번 반복이 끝나면 4에 2를 더한 6이 j가 된다(2의 배수를 구하기 위함)
                arr[j] = false; //6은 2의 배수이기 때문에 소수가 아닌 것으로 만든다
            }
        }
    } //for 반복문으로 i의 배수들이 다 제거가 된다.

    return arr.filter(element => element).length 
    //최종적으로 filter로 arr중 값이 true인 것의 개수를 구한다.
}


console.log(isPrime(100))
