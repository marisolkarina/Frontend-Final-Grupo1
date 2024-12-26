import React from 'react';
import { Link } from 'react-router-dom';
import { Search, User, ShoppingCart } from 'lucide-react';

function Header() {
    const filtrarPorCategoria = (categoria) => {
        console.log(`Filtrando por categoría: ${categoria}`);
    };
    return (
        <header>

            <nav className="nav-secundario">
                <Link className='logo' to="/">PetShop</Link>

                <form onSubmit="">
                    <input placeholder="Buscar" id="textoIngresado" />
                    <button type="submit"><Search className="search-icon" /></button>
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
                <Link to="/">Inicio</Link>
                <a onClick={() => filtrarPorCategoria('perro')}>Perro</a>
                <a onClick={() => filtrarPorCategoria('gato')}>Gato</a>
                <a onClick={() => filtrarPorCategoria('conejo')}>Conejo</a>
            </nav>
        </header>
    );
}

export default Header;