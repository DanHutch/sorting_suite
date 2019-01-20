function quickSort(unsortedArray) {

  if(unsortedArray.length <= 1) {
    return unsortedArray;
  }

  let sortingArray = [...unsortedArray]
  const pivot = sortingArray.pop();
  let smallerArray = [];
  let biggerArray = [];


  sortingArray.forEach(element =>
    element < pivot ? smallerArray.push(element) : biggerArray.push(element)
  )

  return [...quickSort(smallerArray), pivot, ...quickSort(biggerArray)];
}

module.exports = quickSort;