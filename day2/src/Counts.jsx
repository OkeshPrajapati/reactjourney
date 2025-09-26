import React from 'react'

export const Counts = ({count}) => {
  return (
    <div className="flex items-center justify-center bg-gray-800 px-8 py-6 rounded-xl shadow-lg w-64 mb-4">
      <span className="text-4xl font-bold">{count}</span>
    </div>
  );
}
