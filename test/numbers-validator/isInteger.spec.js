const { expect } = require('chai');
const { describe, it, beforeEach, afterEach } = require('mocha');
const NumbersValidator = require('../../app/numbers_validator');

// 'describe' is used to group related tests together into a test suite.

describe('isInteger', () => {
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  // Positive tests for isInteger
  describe('positive tests', () => {
    it('should return true when the value is a positive integer', () => {
      const result = validator.isInteger(5);
      expect(result).to.equal(true);
    });

    it('should return true when the value is a negative integer', () => {
      const result = validator.isInteger(-3);
      expect(result).to.equal(true);
    });

    it('should return true when the value is zero', () => {
      const result = validator.isInteger(0);
      expect(result).to.equal(true);
    });
  });

  // Negative tests for isInteger
  describe('negative tests', () => {
    it('should return false when the value is a floating-point number', () => {
      const result = validator.isInteger(4.5);
      expect(result).to.equal(false);
    });

    it('should throw an error when the value is not a number (string)', () => {
      const input = 'five';
      expect(() => {
        validator.isInteger(input);
      }).to.throw(`[${input}] is not a number`);
    });

    it('should throw an error when the value is not a number (object)', () => {
      const input = {};
      expect(() => {
        validator.isInteger(input);
      }).to.throw(`[${input}] is not a number`);
    });

    it('should throw an error when the value is not a number (array)', () => {
      const input = [];
      expect(() => {
        validator.isInteger(input);
      }).to.throw(`[${input}] is not a number`);
    });
  });
});
