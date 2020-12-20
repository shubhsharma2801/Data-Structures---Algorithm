/** The problem statement states that given a number of sides in an array. Find how may trainagle is possible.
 *  Solve it in O(n2) complexity.
 *  So First thing to keep in mind is for any triangle to exist (a+b)>c.
 *  Algorithm :-
 *  1. Sort the array.
 *  2. Iterate two for loop
 *      i) i=0 to i<n-1
 *          ii) j = i+1 to n
 *              iii) count k till array[i] + array[j] > array[k]
 */

const countTriangle = (array) => {
  array.sort((a, b) => a - b);
  let n = array.length;
  let count = 0;
  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n; j++) {
      let k = j + 1;
      while (k < n && array[i] + array[j] > array[k]) {
        k = k + 1;
      }
      count += k - 1 - j;
    }
  }
  return count;
};

console.log(countTriangle([2,2,3,4]));
