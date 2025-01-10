// Importing the 'expect' function from the 'chai' library to perform assertions
const { expect } = require('chai');

// added by me
const { describe, it, beforeEach, afterEach } = require('mocha');

// Importing the NumbersValidator class from the relative path '../app/numbers-validator'
// so we can test its methods.
const NumbersValidator = require('../../app/numbers_validator');

// 'describe' is used to group related tests together into a test suite.
// Here, it describes a suite of tests for the 'isNumberEven' method of NumbersValidator class.
describe('isNumberEven', () => {
  // Declaring a variable 'validator' outside of the 'beforeEach' and 'it' blocks
  // to make it accessible throughout this describe block.
  let validator;

  // 'beforeEach' is a hook that runs before each test ('it' block) within this 'describe' block.
  // It's usually used for setting up the test environment.
  beforeEach(() => {
    // Instantiates a new NumbersValidator object before each test and assigns it to 'validator'
    validator = new NumbersValidator();
  });

  // 'afterEach' is a hook that runs after each test. It is often used for cleanup activities.
  afterEach(() => {
    // Sets the validator variable to null to clean up memory after each test
    validator = null;
  });

  // Modifed accoring to "Imporve code coverage"
  describe('positive tests', () => {
    it('should return true when provided an even number', () => {
      const validationResults = validator.isNumberEven(4);
      expect(validationResults).to.be.equal(true);
    });
  });

  describe('negative tests', () => {
    it('should return false when provided an non even number', () => {
      const validationResults = validator.isNumberEven(5);
      expect(validationResults).to.be.equal(false);
    });

    // Handel other casese whn nont a number is proivided
    it('shoul throw an error whn not a Number value is provided', () => {
      const input = 'four';

      expect(() => {
        validator.isNumberEven(input);
      }).to.be.throw(`[${input}] is not of type "Number" it is of type "${typeof input}"`);
    });
  });
});
