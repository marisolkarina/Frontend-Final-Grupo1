import React from 'react';
import { Link } from 'react-router-dom';
import { Search, User, ShoppingCart } from 'lucide-react';

function Header() {

    return (
        <header>

            <nav className="nav-secundario">
                <Link className='logo' to="/">PetShop</Link>

                <form>
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
                <Link to="/productos/perro">Perro</Link>
                <Link to="/productos/gato">Gato</Link>
                <Link to="/productos/conejo">Conejo</Link>
            </nav>
        </header>
    );
}

export default Header;