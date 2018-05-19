
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

  it('should take an array as an argument', () => {
    // setup 
    let numbers = [];

    // execution
    // expect
    expect(bubbleSort(numbers)).to.deep.equal([])
  });

  it('should sort numbers with both positive and negative values', () => {
    // setup
    let numbers = [-10, 4, 1, -5];
    // execution
    let expectedArray = [-10, -5, 1, 4];
    // expect
    expect(bubbleSort(numbers)).to.deep.equal(expectedArray);
  })
});