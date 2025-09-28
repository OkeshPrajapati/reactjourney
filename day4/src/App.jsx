import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";

function App() {
  const [theme, setTheme] = useState("dark");

  // load theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  // apply theme to body + save in localStorage
  useEffect(() => {
    document.body.className = theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-black";
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen transition-colors duration-300">
      <h1 className="text-3xl font-bold mb-4">Theme Toggle </h1>
      <p className="text-lg mb-6 opacity-80">Switch between Dark & Light mode</p>

      <ThemeToggle theme={theme} setTheme={setTheme} />
    </div>
  );
}

export default App;
