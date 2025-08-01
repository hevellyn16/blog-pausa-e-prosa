// src/components/Header.jsx

export function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">Pausa e Prosa</h1>
        <nav className="space-x-6">
          <a href="#" className="text-gray-600 hover:text-indigo-600">Home</a>
          <a href="#" className="text-gray-600 hover:text-indigo-600">Sobre</a>
          <a href="#" className="text-gray-600 hover:text-indigo-600">Contato</a>
        </nav>
      </div>
    </header>
  );
}