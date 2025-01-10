// Importing the 'expect' function from the 'chai' library to perform assertions
const { expect } = require('chai');

// added by me
const { describe, it, beforeEach, afterEach } = require('mocha');

// Importing the NumbersValidator class from the relative path '../app/numbers-validator'
// so we can test its methods.
const NumbersValidator = require('../../app/numbers_validator');

// 'describe' is used to group related tests together into a test suite.
describe('isAllNumbers', () => {
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  // Positive tests for isAllNumbers
  describe('positive tests', () => {
    it('should return true when all elements are numbers', () => {
      const inputArray = [1, 2, 3, 4.5, -6];
      const result = validator.isAllNumbers(inputArray);
      expect(result).to.equal(true);
    });

    it('should return true when the input is an empty array', () => {
      const inputArray = [];
      const result = validator.isAllNumbers(inputArray);
      expect(result).to.equal(true);
    });
  });

  // Negative tests for isAllNumbers
  describe('negative tests', () => {
    it('should return false when at least one element is not a number', () => {
      const inputArray = [1, 'two', 3];
      const result = validator.isAllNumbers(inputArray);
      expect(result).to.equal(false);
    });

    it('should throw an error when input is not an array', () => {
      const input = 'not an array';
      expect(() => {
        validator.isAllNumbers(input);
      }).to.throw(`[${input}] is not an array`);
    });

    it('should throw an error when input is an object instead of an array', () => {
      const inputObject = { a: 1, b: 2 };
      expect(() => {
        validator.isAllNumbers(inputObject);
      }).to.throw(`[${inputObject}] is not an array`);
    });
  });
});
