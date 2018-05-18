let numbers = [5, 4, 3, 2, 1];

function bubbleSort(array) {

  for (let i = 0; i < numbers.length; i++) {

    for (let j = 0; j < numbers.length; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }

  return numbers;

}

bubbleSort(numbers);

export default bubbleSort;