import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, User, ShoppingCart } from 'lucide-react';

function Header() {
    const [hoveredCategory, setHoveredCategory] = useState(null);

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
                    <input
                        placeholder="Buscar"
                        id="textoIngresado"
                        onChange={(e) => setHoveredCategory(e.target.value)}
                    />
                    <Link to={`/productos-buscados/${hoveredCategory}`}>
                        <Search className="search-icon" />
                    </Link>
                </form>

                <div className="nav-secundario__iconos">
                    <Link to="/login" className="link-unstyled">
                        <User />
                    </Link>
                    <Link to="/cart" className="link-unstyled">
                        <ShoppingCart />
                    </Link>
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
                    transition: color 0.3s ease, text-decoration 0.3s ease;
                }
                .categoria.hovered {
                    color: white;
                    text-decoration: underline;
                }
                `}
            </style>
        </header>
    );
}

export default Header;

