import { useState } from "react";

function TodoInput({ addTodo }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(input);
    setInput("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex space-x-2 mb-6 w-full max-w-md"
    >
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new task..."
        className="flex-grow px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none"
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg font-semibold"
      >
        Add
      </button>
    </form>
  );
}

export default TodoInput;
