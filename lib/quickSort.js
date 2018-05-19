let numberArray = [7, 4, 6, 2, 5];

function quickSort(numberArray) {

  if (numberArray.length < 2) {
    return numberArray;
  }

  let greaterThan = [];
  let lessThan = [];
  let pivot = numberArray.pop();

  numberArray.forEach(num => {

    if (pivot > num) {
      lessThan.push(num)
    }
    else if (pivot <= num) {
      greaterThan.push(num)
    }

  })
  numberArray = [...quickSort(lessThan), pivot, ...quickSort(greaterThan)];
  return numberArray;

}
quickSort(numberArray)