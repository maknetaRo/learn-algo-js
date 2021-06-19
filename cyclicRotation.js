function solution(A, K) {
  for (let i = 0; i < K; i++) {
    let last = A.pop();
    A.unshift(last);
  }
  return A;
}

console.log(solution([3, 4, 6], 2));
