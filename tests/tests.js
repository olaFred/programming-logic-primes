'use strict';
const jasmine = require('jasmine');
const getPrimes = require('../app/index.js');

describe("Get prime tests ", function() {

  it("should return `[2,3]` for 3", function() {
    var list = [2,3];
    expect(getPrimes.getPrimes(3)).toEqual(list);
  });

  it("should return `[2,3,5,7,11,13,17,19]` for 20", function() {
    expect(getPrimes.getPrimes(20)).toEqual([2,3,5,7,11,13,17,19]);
  });

  it("should return `Please enter a non zero number` for 0", function() {
    expect(getPrimes.getPrimes(0)).toBe('Please enter a non zero number');
  });

  it("should return `Please enter a positive number` for -1", function() {
    expect(getPrimes.getPrimes(-1)).toBe('Please enter a positive number');
  });

  it("should return `Invalid. Please enter a number` for non numbers", function() {
    expect(getPrimes.getPrimes('non number')).toBe('Invalid. Please enter a number');
  });

  it("should return '[]' for 1", function() {
    expect(getPrimes.getPrimes(1)).toEqual([]);
  });

  it("should return `[2,3,5,7,11,13,17]` for 18", function() {
    expect(getPrimes.getPrimes(18)).toEqual([2,3,5,7,11,13,17]);
  });

  it("should return [2,3,5,7,11,13,17,23]", function() {
    expect(getPrimes.getPrimes(25)).toEqual([2,3,5,7,11,13,17,19,23]);
  });

  it("should return [2,3,5,7]", function() {
    expect(getPrimes.getPrimes(10)).toEqual([2,3,5,7]);
  });

  it("should return 103 since its indivisible by 3 and 5", function() {
    expect(getPrimes.getPrimes(40)).toEqual([2,3,5,7,11,13,17,19,23,29,31,37]);
  });
});