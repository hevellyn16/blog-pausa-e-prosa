import { Header } from './components/Header';
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { PostPage } from './pages/PostPage';
import './App.css';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> {/* 2. Envolva o App */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)

function App() {
  return (
    <div className="bg-vinho min-h-screen">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/post/:postId" element={<PostPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;