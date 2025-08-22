import { useState } from "react";
import Card from "./Card";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center p-4 ${
        darkMode ? "bg-gray-900" : "bg-gray-100"
      }`}
    >
      <Card darkMode={darkMode} toggleTheme={toggleTheme} />
    </div>
  );
}
