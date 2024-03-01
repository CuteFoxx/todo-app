import { useContext, useState } from "react";
import { TodosContext } from "../contexts/TodosContext";

const TodoForm = () => {
  const [currentTodo, setCurrentTodo] = useState("");
  const [todos, setTodos] = useContext(TodosContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentTodo) {
      setTodos((currentTodos) => [
        ...currentTodos,
        { id: Date.now(), todo: currentTodo.trim(), completed: false },
      ]);
    }

    setCurrentTodo("");
  };

  return (
    <form className="todo__form" action="" onSubmit={handleSubmit}>
      <span className="todo__form-circle"></span>
      <input
        value={currentTodo}
        onInput={(e) => setCurrentTodo(e.target.value)}
        className="todo__form-input"
        placeholder="Create a new todo..."
      ></input>
    </form>
  );
};

export default TodoForm;
