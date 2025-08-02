export function PostCard() {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:-translate-y-1">
      <div className="p-6">
        <span className="text-sm text-gray-500">01 de Agosto, 2025</span>
        <h2 className="text-2xl font-bold text-gray-800 mt-2 mb-3">
          Título de Exemplo do Post
        </h2>
        <p className="text-gray-600 mb-4">
          Este é um pequeno resumo do conteúdo do post...
        </p>
        <div className="flex items-center">
          <div className="text-sm">
            <p className="text-gray-900 font-semibold">Autor(a)</p>
          </div>
        </div>
      </div>
    </div>
  );
}