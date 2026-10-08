import { Routes, Route } from 'react-router-dom'; // Quitamos BrowserRouter de aquí
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer'; 
import Inicio from './pages/Inicio';
import Productos from './pages/Productos';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      <NavigationBar />
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/productos" element={<Productos />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
