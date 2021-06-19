// shorter way of finding min and max in the function using .sort() method and with a comparison function
function minMax2(arr) {
  arr.sort((a, b) => a - b);
  let min = arr[0];
  let max = arr[arr.length - 1];
  return [min, max];
}

console.log(minMax2([1, 2, 3, 4, 5]));
console.log(minMax2([14, 35, 6, 1, 34, 54])); // [1, 54]
console.log(minMax2([1.346, 1.6532, 1.8734, 1.8723])); // [1.346, 1.8734]
console.log(minMax2([0.432, 0.874, 0.523, 0.984, 0.327, 0.2345])); // [0.2345, 0.984]
console.log(minMax2([13, 72, 98, 43, 24, 65, 31])); // [13, 98]
console.log(minMax2([-54, -23, -54, -21])); // [-54, -21]
console.log(minMax2([-0.473, -0.6834, -0.1287, 0.5632])); // [-0.6834, 0.5632]
console.log(minMax2([0, 0, 0, 0])); // [0, 0]
