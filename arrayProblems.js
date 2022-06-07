// Reverse of array/
let a = [1, 2, 3, 4, 5];
a.reverse();
console.log(a);
//    -------------------------------------------------------------------------
//Reverse an string
let b = "hemantjadhav";
const reversedString = b.split("").reverse().join("");
console.log(reversedString);
//    -------------------------------------------------------------------------
// reverse original array using custom method
const customReverse = (array) => {
  let lastIndex = array.length - 1;
  for (let firstIndex = 0; firstIndex < lastIndex; firstIndex++) {
    //   swapping values using es6 syntax ---- [a,b] = [b,a]
    [array[firstIndex], array[lastIndex]] = [
      array[lastIndex],
      array[firstIndex],
    ];
    //   swapping values using temp variable ----

    // let temp = array[firstIndex];
    // array[firstIndex] = array[lastIndex];
    // array[lastIndex] = temp;
    lastIndex--;
  }
  return array;
};

const reversedArray = customReverse([1, 2, 3, 4, 5, 6]);
console.log(reversedArray);
//    -------------------------------------------------------------------------
// reverse  and return new array using custom method
const customReverseNewArray = (array) => {
  const newArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
};

const reversedNewArray = customReverseNewArray([1, 2, 3, 4, 5, 6]);
console.log(reversedArray);
//    -------------------------------------------------------------------------
// Find Minimum and Maximum Values in an Array:-(“[The spread] operator causes the values in the array to be expanded, or ‘spread,’ into the function’s arguments.”)
Math.min(1, 3, 5); // 1
Math.min([1, 3, 5]); // NaN
// Using the spread operator
Math.min(...[1, 3, 5]); // 1
Math.max(...[1, 3, 5]); // 5
//    -------------------------------------------------------------------------
// Using Function.prototype.apply() instead of the spread operator
Math.min.apply(null, [1, 3, 5]); // 1(first argument to .apply() is the target for this, which in this case does not matter, so I passed in null as the first argument.)
Math.max.apply(null, [1, 3, 5]); // 5
//    -------------------------------------------------------------------------
// find min max number from array using custom method
var arr = [32, 1, 4, 63, 222, 53, 2];

const findMinMax = (array) => {
  let minValue = array[0];
  let maxValue = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < minValue) minValue = array[i];
    if (array[i] > maxValue) maxValue = array[i];
  }
  console.log("minValue:", minValue);
  console.log("maxValue:", maxValue);
};

findMinMax(arr);
//    -------------------------------------------------------------------------
// find min max number from array using sort method
var arr = [3, 8, 7, 6, 5, -4, 31, 2, 21, 20, 1].sort((a, b) => a - b);
var min = arr[0]; // min
var max = arr[arr.length - 1]; //max
console.log(min, max); //-4,31
//    -------------------------------------------------------------------------
// find min max number from array using reduce method
var arr = [366, 2323, 52, 66, 224, 7755, 42];
const minNum = arr.reduce((prev, curr) => Math.min(prev, curr));
const maxNum = arr.reduce((prev, curr) => Math.max(prev, curr));
console.log(minNum);
console.log(maxNum);
//    -------------------------------------------------------------------------
//    -------------------------------------------------------------------------
//    -------------------------------------------------------------------------
//    -------------------------------------------------------------------------
//    -------------------------------------------------------------------------
//    -------------------------------------------------------------------------
//    -------------------------------------------------------------------------
//    -------------------------------------------------------------------------
//    -------------------------------------------------------------------------
//    -------------------------------------------------------------------------
//    -------------------------------------------------------------------------
//    -------------------------------------------------------------------------
//    -------------------------------------------------------------------------
//    -------------------------------------------------------------------------
//    -------------------------------------------------------------------------
//    -------------------------------------------------------------------------
//    -------------------------------------------------------------------------
//    -------------------------------------------------------------------------
//    -------------------------------------------------------------------------
//    -------------------------------------------------------------------------
//    -------------------------------------------------------------------------
//    -------------------------------------------------------------------------
//    -------------------------------------------------------------------------
//    -------------------------------------------------------------------------
//    -------------------------------------------------------------------------
//    -------------------------------------------------------------------------
//    -------------------------------------------------------------------------
//    -------------------------------------------------------------------------
//    -------------------------------------------------------------------------
//    -------------------------------------------------------------------------
//    -------------------------------------------------------------------------
