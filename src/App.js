import { Header } from './components/Header';
import './App.css';

function App() {
  return (
    // Adicionamos um fundo cinza claro para a página toda
    <div className="bg-gray-100 min-h-screen">
      <Header />

      {/* Aqui virá o conteúdo principal do blog */}
    </div>
  );
}

export default App;