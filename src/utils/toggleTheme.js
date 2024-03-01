export const toggleTheme = (theme, setTheme) => {
  if (theme === "light") {
    setTheme("dark");
  }
  if (theme === "dark") {
    setTheme("light");
  }
};
