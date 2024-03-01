import { useContext, useEffect, useState } from "react";
import { TodosContext } from "../contexts/TodosContext";
import { TodoFilterContext } from "../contexts/TodoFilterContext";

const TodoFilters = () => {
  const [todos, setTodos] = useContext(TodosContext);
  const [itemsLeft, setItemsLeft] = useState(0);
  const [todoFilter, setTodoFilter] = useContext(TodoFilterContext);

  //calc items left
  useEffect(() => {
    setItemsLeft(0);

    todos.forEach((todo) => {
      if (todo.completed === false) {
        setItemsLeft((counter) => (counter += 1));
      }
    });
  }, [todos]);

  const clearCompleted = () => {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.completed === false);
    });
  };

  const setFilter = (filter) => {
    setTodoFilter(filter);
  };

  return (
    <div className="todo-filters">
      <div className="items-left">{itemsLeft} items left</div>
      <div className="radio-btns">
        <label>
          <input
            type="radio"
            name="filter"
            value={"all"}
            defaultChecked
            onChange={(e) => setFilter(e.target.value)}
          />
          <span>ALL</span>
        </label>
        <label>
          <input
            type="radio"
            name="filter"
            value={"active"}
            onChange={(e) => setFilter(e.target.value)}
          />
          <span>Active</span>
        </label>
        <label>
          <input
            type="radio"
            name="filter"
            value={"completed"}
            onChange={(e) => setFilter(e.target.value)}
          />
          <span>Completed</span>
        </label>
      </div>
      <button className="clear-completed" onClick={clearCompleted}>
        Clear Completed
      </button>
    </div>
  );
};

export default TodoFilters;
