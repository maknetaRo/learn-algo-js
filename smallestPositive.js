// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution1(A) {
  A.sort();
  A = [...new Set(A)];
  let newArr = [];
  for (let i = 0; i < A.length; i++) {
    let diff = A[i + 1] - A[i];
    if (A[i] + 1 === 0) {
      newArr.push(1);
    }
    if (diff !== 1) {
      newArr.push(A[i] + 1);
    }
  }
  return newArr[0];
}
console.log(solution1([1, 2, 6, 4, 3]));
console.log(solution1([-1, -3]));
// 11% total score

function solution(A) {
  A = [...new Set(A)].sort((a, b) => a - b);
  let newArr = A.filter((item, index) =>
    A[index] + 1 !== A[index + 1] ? item : ''
  );
  let mapArray = newArr.map((item) => (item > 0 ? item + 1 : 1));

  return mapArray[0];
}

console.log(solution([1, 2, 6, 4, 3]));
console.log(solution([-1, -3]));
// 33% total score
