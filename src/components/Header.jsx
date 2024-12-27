import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, User, ShoppingCart } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

function Header() {
    const { isAuthenticated, logout } = useAuth();
    const [hoveredCategory, setHoveredCategory] = useState(null);

    const [palabra, setPalabra] = useState('');
    const { items } = useCart();
    const handleMouseEnter = (category) => {
        setHoveredCategory(category);
    };

    const handleMouseLeave = () => {
        setHoveredCategory(null);
    };

    return (
        <header>
            <nav className="nav-secundario">
                <Link className="logo" to="/">PetShop</Link>

                <form>
                    <input placeholder="Buscar" id="textoIngresado" onChange={(e)=>setPalabra(e.target.value)}/>
                    <Link to={`/productos-buscados/${palabra}`}><Search className="search-icon" /></Link>
                </form>

                <div className="nav-secundario__iconos">

                    {isAuthenticated ? (
                        <button onClick={logout} className="btn btn-primary">Logout</button>
                    ) : (
                        <Link to="/login" className="link-unstyled">
                            <User />
                        </Link>
                    )}

                    <Link to="/cart" className="link-unstyled">
                        <ShoppingCart />
                    </Link>
                    {items.length > 0 && (
                        <span className="cart-badge">
                            {items.length}
                        </span>
                    )}
                </div>
            </nav>

            <nav className="nav-principal">
                {['Inicio', 'Perro', 'Gato', 'Conejo'].map((category) => (
                    <Link
                        key={category}
                        to={category === 'Inicio' ? '/' : `/productos/${category.toLowerCase()}`}
                        className={`categoria ${hoveredCategory === category ? 'hovered' : ''}`}
                        onMouseEnter={() => handleMouseEnter(category)}
                        onMouseLeave={handleMouseLeave}
                    >
                        {category}
                    </Link>
                ))}
            </nav>

            {/* Estilos en línea opcionales */}
            <style>
                {`
                    .categoria {
                        text-decoration: none;
                        color: black;
                        font-size: 1rem;
                        padding: 5px 10px;
                        transition: all 0.3s ease;
                    }

                    .categoria:hover {
                        color: #f1f1f1;
                        text-decoration: underline;
                    }
                `}
            </style>
        </header>
    );
}

export default Header;
