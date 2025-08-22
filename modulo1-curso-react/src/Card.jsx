export default function Card({ darkMode, toggleTheme }) {
  return (
    <div
      className={`max-w-md mx-auto p-6 rounded-lg shadow-sm flex flex-col items-center ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
      }`}
    >
      <img
        src="https://i.pravatar.cc/150?img=7"
        alt="Avatar"
        className="rounded-full w-32 h-32 object-cover"
      />
      <h2 className="mt-4 text-2xl font-semibold text-center">
        Ramón Guitierrez Soler
      </h2>
      <p
        className={`mt-2 text-center ${
          darkMode ? "text-gray-300" : "text-gray-600"
        }`}
      >
        Desarrollador Front-End apasionado por React y diseño UI/UX.
      </p>

      <button
        onClick={toggleTheme}
        className="mt-6 px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
      >
        {darkMode ? "Modo Claro" : "Modo Oscuro"}
      </button>
    </div>
  );
}
