/** There are two variation of same problem. Find subarray of sum k & Find subarray of sum 0.
 *  For this we calulate the prefix sum & check in hash that if prefix sum - k exist in the map.
 *  Algorithm :-
 *  1. Create a hashMap
 *  2. Initialize with sum =0 pos=-1
 *  3. Loop through the array and calculate the prefix sum----> sum += array[i]
 *  4. if hashMap contains sum -k
 *      then 
 * //TODO: Add proper explanation
 */
// Subarray sum = k
const findSubarraysSumK = (array, k) => {
  let result = [];
  let hash = new Map();
  let sum = 0;
  hash.set(0, [-1]);
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
    if (hash.has(sum - k)) {
      let list = hash.get(sum - k);
      result.push(
        ...list.map((index) => {
          return { start: index + 1, end: i };
        })
      );
    }
    let temoList = hash.get(sum);
    if (temoList) {
      hash.set(sum, temoList.push(i));
    } else {
      hash.set(sum, [i]);
    }
  }
  return result;
};

// Subarray sum = 0
const findSubarrays = (array) => {
  let result = [];
  let hash = new Map();
  let sum = 0;
  hash.set(0, [-1]);
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
    if (hash.has(sum)) {
      let list = hash.get(sum);
      result.push(
        ...list.map((index) => {
          return { start: index + 1, end: i };
        })
      );
      list.push(i);
      hash.set(sum, list);
    } else {
      hash.set(sum, [i]);
    }
  }
  return result;
};

//console.log(findSubarrays([4, 2, -3, 1, 6]));
console.log(findSubarrays([-1, 1, 8, -3, -5, 2, 0, -4, 6, 1, 2, 1, -3, 4]));
console.log(findSubarraysSumK([1, 2, 3], 3));
