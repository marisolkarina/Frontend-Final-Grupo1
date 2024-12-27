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

                <div className="search-and-icons">
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
                            <User className="login-icon" />
                        </Link>
                        <Link to="/cart" className="link-unstyled">
                            <ShoppingCart />
                        </Link>
                    </div>
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
                    .nav-secundario {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        padding: 10px 20px;
                    }

                    .logo {
                        font-size: 24px;
                        font-weight: bold;
                    }

                    .search-and-icons {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: 100%;
                    }

                    .search-and-icons form {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }

                    .search-and-icons input {
                        padding: 10px;
                        border: 1px solid #ccc;
                        border-radius: 4px;
                        margin-right: 10px;
                        width: 300px; /* Ajusta el tamaño del input */
                    }

                    .nav-secundario__iconos {
                        display: flex;
                        align-items: center;
                        gap: 15px;
                    }

                    .nav-secundario__iconos a {
                        text-decoration: none;
                        color: black;
                        font-size: 20px;
                    }

                    /* Hacemos el icono de Login un poco más grande */
                    .login-icon {
                        font-size: 28px;
                    }

                    .nav-principal {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        padding: 10px 0;
                    }

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
