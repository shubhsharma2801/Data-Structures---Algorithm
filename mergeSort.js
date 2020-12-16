const merge = (left, right) => {
  let array = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      array.push(left.shift());
    } else {
      array.push(right.shift());
    }
  }
  return [...array, ...left, ...right];
};

const mergeSort = (array) => {
  let half = array.length / 2;
  if (array.length < 2) {
    return array;
  }
  let left = array.slice(0, half);
  let right = array.slice(half, array.length);
  return merge(mergeSort(left), mergeSort(right));
};

console.log(mergeSort([32, 23, 4, 5, -98, 1]));
