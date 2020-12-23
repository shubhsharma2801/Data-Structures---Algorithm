/** Find a majority element in an array. Obvious approaches are - Hashing, sorting & counting. All these approaches are not effiecient.
 *  Hashing- extra O(n) space for storing map
 *  Sorting & counting --- O(nlogn)----> as merge sort take this much time to sort.
 *  So we will be using booyer moore alogorithm for counting majority votes.
 *  Algorithm :-
 *  1. Initialize majorityNumber as first item in array.
 *  2. Initialize count as 1. As we have found one majority number.
 *  3. Iterate over the array.
 *      i) if count ===0 at any iteration assign the current element as majority element
 *      ii) if current element is equal to majority element then increment count
 *      iii) if current element is not equal to majority element than decrement counter
 */

const majorityValue = (array) => {
  let majorityNumber = array[0];
  let count = 1;

  for (let i = 1; i < array.length; i++) {
    if (count === 0) {
      majorityNumber = array[i];
    }
    if (majorityNumber === array[i]) {
      count++;
    } else if (majorityNumber !== array[i]) {
      count--;
    }
  }
  return majorityNumber;
};

console.log(majorityValue([3,1,1,1,1,1,3,2]));
