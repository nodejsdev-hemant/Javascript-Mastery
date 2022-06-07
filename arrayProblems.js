// reverse array custom method
const customReverse = (array) => {
  const newArray = [...array];
  let lastIndex = array.length - 1;
  for (let firstIndex = 0; firstIndex < lastIndex; firstIndex++) {
    //   swapping values using es6 syntax ---- [a,b] = [b,a]
    [newArray[firstIndex], newArray[lastIndex]] = [
      newArray[lastIndex],
      newArray[firstIndex],
    ];
    //   swapping values using temp variable ----

    // let temp = newArray[firstIndex];
    // newArray[firstIndex] = newArray[lastIndex];
    // newArray[lastIndex] = temp;
    lastIndex--;
  }
  return newArray;
};

const reversedArray = customReverse([1, 2, 3, 4, 5, 6]);
console.log(reversedArray);
