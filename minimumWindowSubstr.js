/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    const setOrDefault = (map,val)=>{
        if(!map.has(val)){
            map.set(val,0);
        }
        let count = map.get(val);
        map.set(val,++count);
    }
    
    const getOrDefault = (map,key)=>{
        if(map.has(key)){
            return map.get(key);
        }
        return 0;
    }
    
    const decrementOrDeleteFromMap = (map,key)=>{
        let count = map.get(key);
        if(count === 1){
            map.delete(key);
        }
        else{
            map.set(key,--count);
        }
    }
    const s1 = [...s];
    const t1 = [...t];
    
    let frequencyMap = new Map();
    for(let i =0; i<t1.length;i++){
        setOrDefault(frequencyMap,t1[i]);
    }
    
    let left =0;
    let right =0;
    let matchCount =0;
    let desiredCount = t1.length;
    let ans = null;
    let windowMap = new Map();
    while(right <= s1.length ){
        if(matchCount < desiredCount){
            setOrDefault(windowMap,s1[right]);
            //update MatchCount
            matchCount = windowMap.get(s1[right]) <= getOrDefault(frequencyMap,s1[right]) ? ++matchCount :matchCount;
            right++;
        }else{
            let tempAns = s1.slice(left,right);
            if(!ans){
                ans = tempAns;
            }else{
                ans = tempAns.length < ans.length ? tempAns :ans;   
            }
            //console.log(tempAns);
            decrementOrDeleteFromMap(windowMap,s1[left]);
            if(windowMap.has(s1[left])){
             matchCount = windowMap.get(s1[left]) <frequencyMap.get(s1[left]) ? --matchCount :matchCount;   
            }else{
                if(frequencyMap.has(s1[left])){
                    --matchCount;
                }
            }
            left++;
        }
        
    }
    return ans ?ans.join(""):'';
};