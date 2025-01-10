// Importing the 'expect' function from the 'chai' library to perform assertions
const { expect } = require('chai');
const { describe, it, beforeEach, afterEach } = require('mocha');
const NumbersValidator = require('../../app/numbers_validator');

// 'describe' is used to group related tests together into a test suite.

describe('getEvenNumbersFromArray', () => {
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  // Positive tests for getEvenNumbersFromArray
  describe('positive tests', () => {
    it('should return an array of even numbers from the provided array', () => {
      const inputArray = [1, 2, 3, 4, 5, 6];
      const expectedResult = [2, 4, 6];
      const result = validator.getEvenNumbersFromArray(inputArray);
      expect(result).to.deep.equal(expectedResult);
    });

    it('should return an empty array when no even numbers are present', () => {
      const inputArray = [1, 3, 5];
      const result = validator.getEvenNumbersFromArray(inputArray);
      expect(result).to.deep.equal([]);
    });

    it('should return an empty array when input is an empty array', () => {
      const inputArray = [];
      const result = validator.getEvenNumbersFromArray(inputArray);
      expect(result).to.deep.equal([]);
    });
  });

  // Negative tests for getEvenNumbersFromArray
  describe('negative tests', () => {
    it('should throw an error when input is not an array', () => {
      const input = 'not an array';
      expect(() => {
        validator.getEvenNumbersFromArray(input);
      }).to.throw(`[${input}] is not an array of "Numbers"`);
    });

    it('should throw an error when array contains non-number elements', () => {
      const inputArray = [1, 'two', 3];
      expect(() => {
        validator.getEvenNumbersFromArray(inputArray);
      }).to.throw(`[${inputArray}] is not an array of "Numbers"`);
    });

    it('should throw an error when input is an object instead of an array', () => {
      const inputObject = { a: 1, b: 2 };
      expect(() => {
        validator.getEvenNumbersFromArray(inputObject);
      }).to.throw(`[${inputObject}] is not an array of "Numbers"`);
    });
  });
});
