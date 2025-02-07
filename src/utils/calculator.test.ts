import { Calculator } from './calculator';

describe('Calculator', () => {
  it('should return 0 for an empty string', () => {
    expect(Calculator.add('')).toBe(0);
  });
  
});