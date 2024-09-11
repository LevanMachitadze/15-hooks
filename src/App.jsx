import { useState } from 'react';

import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    console.log('adfgadsfasf');
  };

  return (
    <>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <button onClick={handleIncrement}>ssssssssssss</button>
    </>
  );
}

export default App;
