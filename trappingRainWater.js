const trap = (height) => {
  let left_max = 0;
  let right_max = 0;
  let ans = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] >= left_max) {
        left_max = height[left];
      } else {
        ans += left_max - height[left];
      }
      ++left;
    } else {
      if (height[right] >= right_max) {
        right_max = height[right];
      } else {
        ans += right_max - height[right];
      }
      --right;
    }
  }
  return ans;
};

console.log(trap([4, 2, 0, 3, 2, 5]));
