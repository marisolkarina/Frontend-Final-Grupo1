import React from 'react';
import { Link } from 'react-router-dom';
import { Search, User, ShoppingCart } from 'lucide-react';

function Header() {
    const filtrarPorCategoria = (categoria) => {
        console.log(`Filtrando por categoría: ${categoria}`);
      };
    return (
        <header>
            <nav className="nav-principal">
                <a to="/">Inicio</a>
                <a to="/">Productos</a>
            </nav>

            <nav className="nav-secundario">
                <a className='logo' href="/">PetShop</a>

                <form onsubmit="">
                    <input placeholder="Buscar" id="textoIngresado" />
                    <button type="submit"><Search className="search-icon" /></button>
                </form>

                <div className="nav-secundario__iconos">
                    <Link to="/login" className="link-unstyled">
                        <User />
                    </Link>
                    <a href="/cart" className="link-unstyled">
                        <ShoppingCart />
                    </a>
                </div>
            </nav>

            <nav className="nav-categorias">
                <a onClick={() => filtrarPorCategoria('perro')}>Perro</a>
                <a onClick={() => filtrarPorCategoria('gato')}>Gato</a>
                <a onClick={() => filtrarPorCategoria('conejo')}>Conejo</a>
            </nav>
        </header>
    );
}

export default Header;