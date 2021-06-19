let arr = ['I', 'stay', 'at', 'home', 'and', 'study', 'Javascript'];

// use splice to remove from given index, given number of elements
let arr1 = arr.splice(5, 6, 'dance', 'to', 'the', 'beat');
let arr2 = arr.splice(1, 4);

console.log(arr2);

console.log(arr1);
console.log(arr);

arr.splice(-1, 0, 'every', 'evening');
console.log(arr);

let months = ['January', 'February', 'Monday', 'Tuesday'];
let days = months.splice(2, 2, 'March', 'April');
console.log(months);
console.log(days);
months.splice(4, 0, 'May, :June');
console.log(months);

let fruits = ['apple', 'banana', 'pear'];
fruits.splice(2, 0, 'strawberry', 'orange');
console.log(fruits);
console.log(fruits[2]);
console.log(fruits[4]);

let items = [1, 2, 3, 4, 5];
let deletedItems = items.splice(0, 4);
console.log(items);

let oddNumbers = [1, 3, 5, 7, 11];
let lastItem = oddNumbers.splice(4, 1, 9);
console.log(oddNumbers);
console.log(lastItem);
let newArray = oddNumbers.concat(lastItem);
console.log(newArray);

let array = [1, 2, 3, 4, 5];
let nextArray = array.slice();
let partArray = nextArray.slice(1, 4);
console.log(nextArray);

console.log(partArray);
console.log(array);
console.log(array.slice(-2));

let nums = [1, 2];
nums.concat([3, 4]);
console.log(nums.concat([3, 4], [5, 6]));

console.log(nums);
let arrayLike = {
  0: 'something',
  1: 'else',
  [Symbol.isConcatSpreadable]: true,
  length: 1,
};

console.log(nums.concat(arrayLike));

['Bilbo', 'Gandalf', 'Nazgul'].forEach((item, index, array) =>
  console.log(item, index, array)
);

const arrIn = [NaN];
console.log(arrIn.indexOf(NaN));
console.log(arrIn.includes(NaN));

let users = ['Anna', 'Chris', 'Kate', 'Celine', 'Albert'];
let user = users.find((item, index) => index === 2);
console.log(user);

let userLast = users.findIndex((item) => item === 'Albert');
console.log(userLast);

let results = users.filter((item) => item.startsWith('C'));
console.log(results);
let userIndex = users.filter((item, index) => index % 2 == 0);
console.log(userIndex);

let lengths = ['Bilbo', 'Gandalf', 'Nazgul'].map((item) => item.length);
console.log(lengths);

function comapreNumeric(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}

let lista = [1, 2, 15];
lista.sort();
console.log(lista);
lista.sort(comapreNumeric);
console.log(lista);

// [1, -2, 15, 2, 0, 8].sort(function (a, b) {
//   console.log(a + ' <> ' + b);
//   return a - b;
// });
let sortedElems = [1, -2, 15, 2, 0, 8].sort((a, b) => a - b);
console.log(sortedElems);
