const filterRangeInPlace = (arr, a, b) => {
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];
    if (val < a || val > b) {
      arr.splice(i, 1);
      i--;
    }
  }
  return arr;
};
let arr = [5, 3, 8, 1];

console.log(filterRangeInPlace(arr, 1, 4));
