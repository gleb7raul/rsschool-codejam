function sumOfOther(arr){
    let result = [];
    if (!arr.length) return result;
    let sum = arr.reduce((pv,cv)=>{return pv+cv;});
    for (let i=0; i < arr.length; i++){
        result.push(sum - arr[i]);
    };
    return result;
};