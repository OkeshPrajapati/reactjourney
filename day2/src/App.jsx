import { useState } from "react";
import Control from "./Control";
import { Counts } from "./Counts";
// import Counter from "./Counter";
// import CounterControls from "./CounterControls";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-4"> Counter</h1>
      <p className="text-lg mb-6 opacity-80">
        React <span className="font-semibold">useState</span> hook practice
      </p>

      <Counts count={count} />

      <Control 
        count={count} 
        setCount={setCount} 
      />
    </div>
  );
}

export default App;
