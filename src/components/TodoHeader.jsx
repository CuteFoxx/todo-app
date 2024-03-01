import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";

const TodoHeader = () => {
  return (
    <div className="todo__header">
      <Logo />
      <ThemeToggle />
    </div>
  );
};

export default TodoHeader;
