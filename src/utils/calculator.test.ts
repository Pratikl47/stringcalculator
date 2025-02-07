import { Calculator } from './calculator';

describe('Calculator', () => {
  it('should return 0 for an empty string', () => {
    expect(Calculator.add('')).toBe(0);
  });

  it('should return the number itself when given a single number', () => {
    expect(Calculator.add('1')).toBe(1);
  });

  it('should return the sum of two numbers', () => {
    expect(Calculator.add('1,5')).toBe(6);
  });

  it('should throw an error if there are negative numbers', () => {
    expect(() => Calculator.add('1,-2,3')).toThrow('negative numbers not allowed -2');
  });
  
});