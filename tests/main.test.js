const addNums = require('../src/main');


describe('addNums()',()=>{
    test('should produce the sum of two numbers',()=>{
        const actual = addNums(6,6);
        expect(actual).toBe(12);
    })
    test('should output 0 if no numbers are passed in',()=>{
        const actual = addNums();
        expect(actual).toBe(0)
    })
    test('should produce the sum of two stringified numbers',()=>{
        const actual = addNums('5','100');
        expect(actual).toBe(105)
    })
    test('should return error if inputs are not a number',()=>{
        const actual = addNums('dog', {});
        expect(actual).toBe('User entered non-numeric values')
    })
    test('returned val should be a number',()=>{
        const actual = addNums('5','100');
        expect(typeof actual).toBe('number')
    })
    test('should check if add nums is a function',()=>{
        expect(typeof addNums).toBe('function')
    })
});


/*
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
console.log('check if add nums is a function', typeof addNums === 'function')*/