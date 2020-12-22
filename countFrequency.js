/** The problem statement state that we have to count duplicates in array from O-->m of size m.
 *  The restrictions are O(1) space & O(n) time.
 *  Algorithm :-
 *  1. Subtract 1 from all variable. To accomodate m value in m-1 index. As array indexing is from 0 to m-1
 *  2. Iterate over all values.
 *      i) If value is less tha m then add m to that values index
 *              array[value]+=m
 *      ii) If value is greater than m means this value is already updated then
 *              array[value%m]+=m
 *  3. Iterate over all values
 *      If value is greater than m then print index +1 ------> value/m
 */

const countFrequency = (array) => {
  let modArray = array.map((elem) => elem - 1);
  let m = modArray.length;

  for (let i = 0; i < m; i++) {
    let value = modArray[i] > m ? modArray[i] % m : modArray[i];
    modArray[value] += m;
  }
  console.log(modArray)
  for (let i = 0; i < m; i++) {
    if (modArray[i] > m) {
      console.log(`${i + 1}----->${Math.floor(modArray[i] / m)}`);
    }
  }
};

countFrequency([5, 2, 7, 7, 5, 5, 2]);
