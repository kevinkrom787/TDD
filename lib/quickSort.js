let array = [7, 4, 6, 2, 5];

function quickSort(array) {

  if (array < 2) {
    return;
  }

  let greaterThan = [];
  let lessThan = [];


  // array.forEach(num => {
  //   let pivot = array.pop();

  //   if (pivot > num) {
  //     greaterThan.push();
  //   }
  //   if (pivot < num) {
  //     lessThan.push();

  //   }

  //   quickSort(...lessThan, ...pivot, ...greaterThan);

  // });

}
quickSort(array);

export default quickSort;