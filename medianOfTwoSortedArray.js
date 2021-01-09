var findMedianSortedArrays = function(nums1, nums2) {
    let a = [];
    let b = [];
    if(nums1.length < nums2.length){
        a = nums1;
        b = nums2;
    }else{
        a = nums2;
        b = nums1;
    }
    let n = a.length;
    let m = b.length;
    let start = 0;
    let end = n;
    while (start <= end){
        let i1 = Math.floor((start + end)/2);
        let i2 = Math.floor((n + m + 1)/2) - i1;
        let min1 = (i1 === n)? Infinity: a[i1];
        let max1 = (i1 === 0) ? -Infinity : a[i1 -1];
        let min2 = (i2 === m) ? Infinity :b[i2];
        let max2 = (i2 === 0) ? -Infinity: b[i2 -1];
        if(max1 <= min2 && max2 <= min1){
            if((n + m )% 2 === 0){
                return (Math.max(max1,max2) + Math.min(min1,min2))/2;
            }else{
                return Math.max(max1,max2);
            }
        }
        if(max1 > min2){
            end = i1 -1;
        }else{
            start = i1 + 1
        }
    }
};