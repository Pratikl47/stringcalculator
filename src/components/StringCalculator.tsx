import React, { useState } from 'react';
import { Calculator } from '../utils/calculator';

const StringCalculator: React.FC = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = () => {
    try {
      const result = Calculator.add(input);
      setResult(result);
      setError(null);
    } catch (err:any) {
      setError(err.message);
      setResult(null);
    }
  };

  return (
<div className="calculator-container">
      <input
        type="text"
        value={input}
        onChange={handleChange}
        className="calculator-input"
      />
      <button onClick={handleSubmit} className="calculator-button">
        Add
      </button>
      <div>
        {error && <p className="calculator-error">{error}</p>}
        {result !== null && <p className="calculator-result">Result: {result}</p>}
      </div>
    </div>
  );
};

export default StringCalculator;
