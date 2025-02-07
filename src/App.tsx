import React from 'react';
import './App.css';
import StringCalculator from './components/StringCalculator';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>String Calculator</h1>
      <StringCalculator />
    </div>
  );
};

export default App;