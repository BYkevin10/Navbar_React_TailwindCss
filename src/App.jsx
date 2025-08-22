import Navbar from "./Navbar";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="p-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Bienvenido a mi aplicación</h1>
        <p className="text-lg text-gray-700">
          Contenido Principal.
        </p>
      </div>
    </div>
  );
}

export default App;
