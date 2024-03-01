import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoHeader from "./components/TodoHeader";
import Todos from "./components/Todos";
import { ThemeContext } from "./contexts/ThemeContext";
import { TodosContext } from "./contexts/TodosContext";
import { toggleTheme } from "./utils/toggleTheme";
import { TodoFilterContext } from "./contexts/TodoFilterContext";

function App() {
  const [theme, setTheme] = useState("light");
  const [todos, setTodos] = useState([]);
  const [todoFilter, setTodoFilter] = useState("all");

  return (
    <div className={`app__container ${theme}`}>
      <div className="wrapper">
        <ThemeContext.Provider value={() => toggleTheme(theme, setTheme)}>
          <TodosContext.Provider value={[todos, setTodos]}>
            <TodoFilterContext.Provider value={[todoFilter, setTodoFilter]}>
              <TodoHeader />
              <TodoForm />
              <Todos />
            </TodoFilterContext.Provider>
          </TodosContext.Provider>
        </ThemeContext.Provider>
      </div>
    </div>
  );
}

export default App;
