function solution(A) {
  let unique = new Set();
  A.forEach((value) => unique.delete(value) || unique.add(value));
  return unique.values().next().value;
}

console.log(solution([9, 3, 9, 9, 7, 9, 3]));
