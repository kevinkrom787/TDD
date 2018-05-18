
import bubbleSort from '../lib/bubbleSort';
var chai = require('chai');  
var expect = chai.expect; 

// describe

describe('bubbleSort', () => {
  it('should result in a sorted array', () => {
  // setup 
    let numbers = [1, 4, 2, 5];


    // execution 
    bubbleSort(numbers);


    // expect
    expect(numbers).to.deep.equal([1, 2, 4, 5]);
  });

  it.only('should take an array as an argument', () => {

    // setup 
    let array = []


    // execution

    // expect
    expect(bubbleSort(array)).to.deep.equal([])
  });

  it('should sort numbers with both positive and negative values', () => {
    // setup
    // execution
    // expect
  })

  it('should ')


});