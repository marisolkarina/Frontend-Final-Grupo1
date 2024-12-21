import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Filtros from './components/Filtros';
import Footer from './components/Footer';
import Products from './components/Products';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <Header />
          <Filtros />
          <main className="main-index" id="misProductos">
            <Routes>
              <Route path="/" element={<Products />} />
              <Route path="/login" element={<Login />} />
              
              <Route path="/register" element={<Register />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </main>
          <Footer />
          </CartProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;

