import { Calculator } from './calculator';

describe('Calculator', () => {
  it('should return 0 for an empty string', () => {
    expect(Calculator.add('')).toBe(0);
  });

  it('should return the number itself when given a single number', () => {
    expect(Calculator.add('1')).toBe(1);
  });
  
});