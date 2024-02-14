/**
 * @param {string[]} strs
 * @return {string}
 */

 let strs=["flower","flower","flower"];


 var longestCommonPrefix = function(strs) {
    
    let common_str=''
    let temp=Math.min();
    for(let i=0;i<strs.length;i++){
        if(strs[i].length<temp){
            temp=strs[i].length
        }
    }
    for(let i=0; i<temp;i++){
       let tracker=0;
       for(let j=0;j<strs.length-1;j++){
           if(strs[j].charAt(i)!=strs[j+1].charAt(i)){
                tracker=1;
                return common_str;
           }
       }
       if(tracker==0){
        common_str+=strs[0].charAt(i)
       }
    }
    return common_str;
};
