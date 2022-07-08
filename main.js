function addNums(numA=0, numB=0){
    numA = Number(numA);
    numB = Number(numB);
    if(isNaN(numA)|| isNaN(numB)){
        return 'User entered non-numeric values';
    }
  
    return numA + numB
}





//produce sum of two numbers
console.log('produce sum of two numbers', addNums(5,7)===12);
//output 0 if no numbers are passed in
console.log('output 0 if no numbers are passed in',addNums()===0)
//produce the sum of two stringified numbers
console.log('produce the sum of two stringified numbers', addNums('2','5')===7);
//both inputs must be a number
console.log('return error if inputs are not a number',addNums([],{})==='User entered non-numeric values');
//returned val must be a number
console.log('returned val must be a number',typeof addNums('5','7') ==='number')
//check if add nums is a function
console.log('check if add nums is a function', typeof addNums === 'function')