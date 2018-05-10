let numbers = [5, 4, 3, 2, 1];

function bubbleSort(array) {
  // create loop number 1 to walk through numbers array starting with index position 0
  for (let i = 0; i < numbers.length; i++) {
    //debugger;
    // create loop number 2 to compare first loop with second index position

    for (let j = 1; j < numbers.length; j++) {
      // debugger;
      // console.log(i - j)
      // if (i > j) {
      // i + 1
      // j[1] moves to i[0]'s position
      //don't know how to swap - look up destructring 
      console.log(i)
      //  console.log(j)
      // repeat process with current index position and i + 1;
      // stepping through double loops is great! I'm not moving i when comparing. 
    }
  }



}

bubbleSort(numbers);