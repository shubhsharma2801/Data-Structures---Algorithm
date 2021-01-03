const maxDistance = (array) => {
  let n = array.length;
  let right = [];
  right[n - 1] = n - 1;

  for (let i = n - 2; i >= 0; i--) {
    right[i] = array[i] > array[right[i + 1]] ? i : right[i + 1];
  }

  let left = [];
  left[0] = 0;
  for (let i = 1; i < n; i++) {
    left[i] = array[i] < array[left[i - 1]] ? i : left[i - 1];
  }
  console.log(left);
  console.log(right);
  let i = 0;
  let j = 0;
  let maxDiff = -1;
  while (i < n && j < n) {
    if (array[left[i]] < array[right[j]]) {
      maxDiff = Math.max(maxDiff, right[j] - left[i]);
      j = j + 1;
    } else {
      i = i + 1;
    }
  }
  return maxDiff;
};

console.log(maxDistance([9, 2, 3, 4, 5, 6, 7, 8, 18, 0]));
