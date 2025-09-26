import React from 'react'

const Control = ({count,setCount}) => {
  return (
    <div className="flex space-x-4">
      <button
        onClick={() => setCount(count - 1)}
        className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg text-lg font-bold"
      >
        -
      </button>

      <button
        onClick={() => setCount(count + 1)}
        className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg text-lg font-bold"
      >
        +
      </button>

      <button
        onClick={() => setCount(0)}
        className="bg-blue-500 cursor-pointer hover:bg-blue-600 px-4 py-2 rounded-lg text-lg font-semibold"
      >
        Reset
      </button>
    </div>
  );
}

export default Control