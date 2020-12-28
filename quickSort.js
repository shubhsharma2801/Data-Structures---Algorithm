const swap = (array, i, min) => {
  [array[i], array[min]] = [array[min], array[i]];
};
const partioning = (array, start, end) => {
  let pivot = array[end];
  let pIndex = start;

  for (let i = start; i < end; i++) {
    if (array[i] <= pivot) {
      swap(array, i, pIndex);
      pIndex++;
    }
  }
  swap(array, pIndex, end);
  return pIndex;
};

const quickSort = (array, start, end) => {
  if (start > end) {
    return;
  }
  let p1 = partioning(array, start, end);
  quickSort(array, start, p1 - 1);
  quickSort(array, p1 + 1, end);
};

const sort = (array) => {
  quickSort(array, 0, array.length - 1);
  return array;
};

console.log(sort([23, 1, 45, 3, 4, 2, 78]));
