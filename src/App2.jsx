import React, { useState } from 'react';
import './App.css';

const App2 = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleLight = () => {
    setIsOn((prev) => !prev);
  };

  return (
    <div className={`container light-${isOn ? 'off' : 'on'}`}>
      <p>this light is {isOn ? 'on' : 'off'}</p>
      <button onClick={toggleLight}>turn {isOn ? 'off' : 'on'}</button>
    </div>
  );
};

export default App2;
