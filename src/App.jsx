import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Products from './components/Products';
import Login from './components/Login';
import Register from './components/Register';
import Cart from './components/Cart';

function App() {
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <Header />
            <Routes>
              <Route path="/" element={<Products />} />
              <Route path="/productos/:tipoFiltro" element={<Products />} />
              <Route path="/productos-buscados/:palabra" element={<Products />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cart" element={< Cart/>} />
              <Route path="/register" element={<Register />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          <Footer />
          </CartProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;

