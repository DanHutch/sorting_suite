function quickSort(unsortedArray) {
  let sortingArray = [...unsortedArray];
  const pivot = sortingArray[sortingArray.length - 1];
  let smallerArray = [];
  let biggerArray = [];
  let equalArray = [];

  if(sortingArray.length <= 1) {
    return sortingArray;
  }

  for(var i = 0; i < sortingArray.length - 1; i++) {

    if(sortingArray[i] <= pivot) {
      smallerArray.push(sortingArray[i]);
    }
    else if(sortingArray[i] > pivot) {
      biggerArray.push(sortingArray[i]);
    }
  };
  return [...quickSort(smallerArray), pivot, ...quickSort(biggerArray)];
}



module.exports = quickSort;