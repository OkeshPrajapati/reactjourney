function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <div className="flex justify-between items-center bg-gray-800 px-4 py-2 rounded-lg">
      <span
        onClick={() => toggleTodo(todo.id)}
        className={`cursor-pointer flex-grow ${
          todo.completed ? "line-through text-gray-400" : ""
        }`}
      >
        {todo.text}
      </span>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="ml-4 bg-red-500 hover:bg-red-600 px-3 py-1 rounded-lg text-sm"
      >
        Delete
      </button>
    </div>
  );
}

export default TodoItem;
