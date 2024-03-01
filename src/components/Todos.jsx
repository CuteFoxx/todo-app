import { useContext } from "react";
import { TodosContext } from "../contexts/TodosContext";
import TodoFilters from "./TodoFilters";
import TodoFilteredItem from "./TodoFilteredItem";
const Todos = () => {
  const [todos, setTodos] = useContext(TodosContext);

  const toggleTodo = (id, completed) => {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        } else {
          return todo;
        }
      });
    });
  };

  const deleteTodo = (id) => {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  };

  return (
    <div className="todos">
      <ul className="todos__list">
        <TodoFilteredItem toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      </ul>
      {todos?.length !== 0 && <TodoFilters />}
    </div>
  );
};

export default Todos;
