import { useContext } from "react";
import { TodoFilterContext } from "../contexts/TodoFilterContext";
import { TodosContext } from "../contexts/TodosContext";
import TodoItem from "./TodoItem";

const TodoFilteredItem = ({ toggleTodo, deleteTodo }) => {
  const [todos, setTodos] = useContext(TodosContext);
  const [todoFilter, setTodoFilter] = useContext(TodoFilterContext);

  if (todoFilter === "all" && todoFilter) {
    return todos?.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />
    ));
  }
  if (todoFilter === "active") {
    return todos
      ?.filter((todo) => todo.completed === false)
      .map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ));
  }
  if (todoFilter === "completed") {
    return todos
      ?.filter((todo) => todo.completed === true)
      .map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ));
  }
};
export default TodoFilteredItem;
