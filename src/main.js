function addNums(numA=0, numB=0){
    numA = Number(numA);
    numB = Number(numB);
    if(isNaN(numA)|| isNaN(numB)){
        return 'User entered non-numeric values';
    }
  
    return numA + numB
}

module.exports= addNums;