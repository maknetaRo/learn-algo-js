function solution(N) {
  let reminders = [];
  while (N > 0) {
    reminders.push(N % 2);
    N = parseInt(N / 2);
  }
  reminders = reminders.reverse();

  let ones = [];
  for (let i = 0; i < reminders.length; i++) {
    if (reminders[i] !== 0) {
      ones.push(i);
    }
  }

  let diff;
  let max = 0;
  for (let i = 0; i < ones.length; i++) {
    diff = Math.abs(ones[i] - ones[i + 1]) - 1;
    if (diff > max) {
      max = diff;
    }
  }
  return max;
}

console.log(solution(529));
console.log(solution(15));
console.log(solution(32));
console.log(solution(3333333333529));
console.log(solution(20));
console.log(solution(1041));
