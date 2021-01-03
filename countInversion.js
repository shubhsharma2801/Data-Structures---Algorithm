const merge = (array, temp, start, mid, end) => {
  let inversionCount = 0;
  let i = start;
  let j = mid ;
  let k = start;

  while (i <= mid && j <= end) {
    if (array[i] <= array[j]) {
      temp[k++] = array[i++];
    } else {
      temp[k++] = array[j++];
      inversionCount = inversionCount + (mid - i);
    }
  }
  while (i <= mid) {
    temp[k++] = array[i++];
  }
  while (j <= end) {
    temp[k++] = array[j++];
  }
  return inversionCount;
};
const modifiedMergeSort = (array, temp, start, end) => {
  if (start >= end) {
    return 0;
  }
  let inversionCount = 0;
  const mid = Math.floor((start + end) / 2);
  //console.log("mid", mid);
  inversionCount += modifiedMergeSort(array, temp, start, mid);
  inversionCount += modifiedMergeSort(array, temp, mid + 1, end);
  inversionCount += merge(array, temp, start, mid + 1, end);
  return inversionCount;
};
const countInversion = (array) => {
  return modifiedMergeSort(array, [], 0, array.length - 1);
};

console.log(countInversion([1, 20, 6, 4, 5]));
