function solution(nums) {
  let len = nums.length
  let answer = 0;

  //세개의 숫자를 더하기 위해 반복문을 세번 돌림
  for (let i = 0; i < len - 2; i++) {
    for (let j = i + 1; j < len - 1; j++) {
      for (let k = j + 1; k < len; k++) {
        if (isPrime(nums[i] + nums[j] + nums[k])) {
          answer++; //소수인지 판별 후 맞으면 answer 숫자를 더함
        }
      }
    }
  }
  return answer;
}

const isPrime = (n) => {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}