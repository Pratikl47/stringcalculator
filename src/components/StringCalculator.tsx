import React, { useState } from 'react';

const StringCalculator: React.FC = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState<number | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    return (
        <div>
            <input
                type="text"
                value={input}
                onChange={handleChange}
            />
            <button >
                Add
            </button>
            <div>
                {error && <p>{error}</p>}
                {result !== null && <p>Result: {result}</p>}
            </div>
        </div>
    );
};

export default StringCalculator;
