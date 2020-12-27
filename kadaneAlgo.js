/** Used to find maximum sum contigious subarray
 *  Algorithm :
 *  1. Maintain two variable. result & currentSum
 *  2. Loop over all the elements
 *  3. Take maximum of currentsum and current element or current element itself
 *  4. Take maximum of result & currentSum
 *      
 */
var maxSubArray = function(nums) {
    let resultSum = Number.MIN_SAFE_INTEGER;
    let currentSum = Number.MIN_SAFE_INTEGER;
    
    for(let i=0;i<nums.length;i++){
        currentSum = Math.max(nums[i],currentSum+nums[i]);
        resultSum = Math.max(resultSum,currentSum);
    }
    return resultSum;
};