const filterRange = (arr, a, b) => {
  let filteredArray = arr.filter((item) => item >= a && item <= b);
  console.log(arr);
  return filteredArray;
};

console.log(filterRange([5, 3, 8, 1], 1, 4));
