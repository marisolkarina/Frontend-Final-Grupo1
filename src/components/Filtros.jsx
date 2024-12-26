import React from 'react';
import { Link } from 'react-router-dom';

function Filtros() {

    return (
        <aside className= "filtros">
            <select id="ordenar" className="filtros__orden">
                <option>Seleccione orden</option>
                <option value="1">Ordenar alfabeticamente</option>
                <option value="2">Ordenar por precio de menor a mayor</option>
                <option value="3">Ordenar por precio de mayor a menor</option>
            </select>

            <div className="filtros__categoria">
                <p>Categorias</p>
                <ul>
                    <li><Link to="/productos/perro">Perro</Link></li>
                    <li><Link to="/productos/gato">Gato</Link></li>
                    <li><Link to="/productos/conejo">Conejo</Link></li>
                </ul>
            </div>

            <div className="filtros__precio">
                <p>Filtrar por precio</p>
                <div className="filtros__precio--minmax">
                    <div>
                        <label for="min">Mín</label>
                        <input type="number" name="precio" />
                    </div>
                    <div>
                        <label for="max">Max</label>
                        <input type="number" name="precio" />
                    </div>
                </div>
                <button onClick="filtrarPorPrecio()">Filtrar</button>
            </div>

            <div className="filtros__color">
                <p>Filtrar por color</p>
                <ul>
                    <li><Link to="/productos/rojo">Rojo</Link></li>
                    <li><Link to="/productos/azul">Azul</Link></li>
                    <li><Link to="/productos/celeste">Celeste</Link></li>
                    <li><Link to="/productos/blanco">Blanco</Link></li>
                    <li><Link to="/productos/marron">Marron</Link></li>
                </ul>
            </div>

        </aside>

    )
}

export default Filtros;



