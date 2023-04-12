import { useState } from 'react';
import Avatar from './Avatar';
import Header from './Header';
import DismissableBlurb from './DismissableBlurb';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col justify-center items-center h-screen space-y-2">
      <Header headingText="React RTL Vitest">
        <p className="text-sm text-slate-500">
          Simple test cases for avatar component
        </p>
      </Header>
      <DismissableBlurb>
        <h1>Vite + React + Vitest + RTL + Tailwindcss </h1>
        <p className="mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet sunt
          natus excepturi saepe harum deleniti.
        </p>
      </DismissableBlurb>
      <Avatar />
    </div>
  );
}

export default App;
