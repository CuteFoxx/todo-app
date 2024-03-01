import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const ThemeToggle = () => {
  const toggleTheme = useContext(ThemeContext);

  return <button className="theme-toggle" onClick={toggleTheme}></button>;
};

export default ThemeToggle;
