function filterArray(arr) {
  return arr.filter((item) => typeof item !== 'string');
}

console.log(filterArray([1, 2, 'a', 'b'])); //➞ [1, 2]

console.log(filterArray([1, 'a', 'b', 0, 15])); //➞ [1, 0, 15]

console.log(filterArray([1, 2, 'aasf', '1', '123', 123])); //➞ [1, 2, 123]
