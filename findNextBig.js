/** Find next big number by rearranging the same digit of number
 *  The Algorithm is divided into three part.
 *  1. Compare in pair and find a pair left side is lower than right side. We start by comparing from left side.
 *  2. After finding the element. We find the next big element in subarray.
 *     For ex. if we found element at i'th posistion we found number in array from i'th -----> n
 *  3. We swap the element at ith with next big number
 *  4. We sort the remaining number from i'th to n.
 */
const swap = (array, i, min) => {
  [array[i], array[min]] = [array[min], array[i]];
};
const findNext = (numer) => {
  let digitArray = Array.from(String(numer), Number);
  let n = digitArray.length;
  let i = 0;
  for (i = n - 1; i > 0; i--) {
    if (digitArray[i] > digitArray[i - 1]) {
      break;
    }
  }
  let element = digitArray[i - 1];
  let min = i;
  for (let j = i + 1; j < n; j++) {
    if (digitArray[j] > element && digitArray[j] < digitArray[min]) {
      min = j;
    }
  }
  swap(digitArray, i - 1, min);
  let splitArray = digitArray.splice(i, n);
  let result = [...digitArray, ...splitArray.sort((a, b) => a - b)].join("");
  return result > numer && result <= 2**31-1 ? result : -1;
};

console.log(findNext(101));
