import { useState } from 'react';
import './App.css';
import Avatar from './Avatar';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h2>React RTL Vitest</h2>
      <p>Simple test cases for avatar component</p>
      <Avatar />
    </div>
  );
}

export default App;
