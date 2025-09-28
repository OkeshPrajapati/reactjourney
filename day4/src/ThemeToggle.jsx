function ThemeToggle({ theme, setTheme }) {
  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="px-6 py-3 rounded-lg font-semibold bg-blue-500 hover:bg-blue-600 text-white transition-all"
    >
      {theme === "dark" ? "Switch to Light Mode" : " Switch to Dark Mode"}
    </button>
  );
}

export default ThemeToggle;
