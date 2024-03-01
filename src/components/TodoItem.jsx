const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <li
      className={`todos__list-item ${
        todo.completed ? "todos__list-item-completed" : ""
      }`}
      onClick={() => toggleTodo(todo.id, !todo.completed)}
    >
      <div className="todos__list-item-circle"></div>
      <p>{todo.todo}</p>

      <button
        className="todos__list-item-button"
        onClick={() => deleteTodo(todo.id)}
      >
        <img src="/icon-cross.svg" alt="cross" />
      </button>
    </li>
  );
};

export default TodoItem;
