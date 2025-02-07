export class Calculator {
    static add(numbers: string): number {
      if (numbers === '') return 0;
  
      const negatives: number[] = [];
  
      if (numbers.startsWith('//')) {
        const delimiterEndIndex = numbers.indexOf('\n');
        const delimiter = numbers.slice(2, delimiterEndIndex);
        const numberList = numbers.slice(delimiterEndIndex + 1).split(delimiter);
  
        numberList.forEach(num => {
          const parsedNum = parseInt(num.trim(), 10);
          if (parsedNum < 0) negatives.push(parsedNum);
        });
  
        if (negatives.length > 0) {
          throw new Error(`Negative numbers not allowed ${negatives.join(', ')}`);
        }
  
        return numberList
          .map(num => parseInt(num.trim(), 10))
          .reduce((acc, curr) => acc + curr, 0);
      }
  
      const numberList = numbers
        .split(/[\n,]+/)
        .map(num => parseInt(num.trim(), 10));
  
      numberList.forEach(num => {
        if (num < 0) negatives.push(num);
      });
  
      if (negatives.length > 0) {
        throw new Error(`Negative numbers not allowed ${negatives.join(', ')}`);
      }
  
      return numberList.reduce((acc, curr) => acc + curr, 0);
    }
  }
  