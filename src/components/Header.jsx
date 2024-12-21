import React from 'react';
import { Link } from 'react-router-dom';

function Header() {

    return (
      <header>
        <nav class="nav-principal">
            <a to="/">Inicio</a>
            <a to="/">Productos</a>
        </nav>

        <nav class="nav-secundario">
            <a href="/">PetShop</a>

            <form onsubmit="">
                <input placeholder="Buscar" id="textoIngresado" />
                <button type="submit"><i class="bi bi-search"></i></button>
            </form>

            <div class="nav-secundario__iconos">
                <a href="/iniciar-sesion" className="link-unstyled">
                    <i class="bi bi-person"></i>
                </a>
                <a href="/carrito" className="link-unstyled">
                    <i class="bi bi-cart3"></i>
                </a>
            </div>
        </nav>

        <nav class="nav-categorias">
            <a onclick="filtrarPorCategoria('perro')">Perro</a>
            <a onclick="filtrarPorCategoria('gato')">Gato</a>
            <a onclick="filtrarPorCategoria('conejo')">Conejo</a>
        </nav>
      </header>
    );
  }
  
  export default Header;