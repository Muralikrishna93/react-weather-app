export default function ToggleMode({ darkMode, setDarkMode }) {
  return (
    <button
      className="toggle-btn"
      onClick={() => setDarkMode((prev) => !prev)}
    >
      {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
    </button>
  );
}
