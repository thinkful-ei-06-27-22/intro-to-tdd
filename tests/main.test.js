const addNums = require('../src/main');
const expect = require('chai').expect;


describe('addNums()',()=>{
    it('should produce the sum of two numbers',()=>{
        const actual = addNums(6,6);
        expect(actual).to.equal(12);
    })
    it('should output 0 if no numbers are passed in',()=>{
        const actual = addNums();
        expect(actual).to.equal(0)
    })
    it('should produce the sum of two stringified numbers',()=>{
        const actual = addNums('5','100');
        expect(actual).to.equal(105)
    })
    it('should return error if inputs are not a number',()=>{
        const actual = addNums('dog', {});
        expect(actual).to.equal('User entered non-numeric values')
    })
    it('returned val should be a number',()=>{
        const actual = addNums('5','100');
        expect(actual).to.be.a('number')
    })
    it('should check if add nums is a function',()=>{
        expect(addNums).to.be.a('function')
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