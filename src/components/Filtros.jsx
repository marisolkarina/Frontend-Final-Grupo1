import React from 'react';

function Filtros() {
    return (
        <aside class= "filtros">
            <select id="ordenar" class="filtros__orden" onchange="obtenerOrden()">
                <option>Seleccione orden</option>
                <option value="1">Ordenar alfabeticamente</option>
                <option value="2">Ordenar por precio de menor a mayor</option>
                <option value="3">Ordenar por precio de mayor a menor</option>
            </select>

            <div class="filtros__categoria">
                <p>Categorias</p>
                <ul>
                    <li><a onclick="filtrarPorCategoria('perro')">Perro</a></li>
                    <li><a onclick="filtrarPorCategoria('gato')">Gato</a></li>
                    <li><a onclick="filtrarPorCategoria('conejo')">Conejo</a></li>
                </ul>
            </div>

            <div class="filtros__precio">
                <p>Filtrar por precio</p>
                <div class="filtros__precio--minmax">
                    <div>
                        <label for="min">Mín</label>
                        <input type="number" name="precio" />
                    </div>
                    <div>
                        <label for="max">Max</label>
                        <input type="number" name="precio" />
                    </div>
                </div>
                <button onclick="filtrarPorPrecio()">Filtrar</button>
            </div>

            <div class="filtros__color">
                <p>Filtrar por color</p>
                <ul>
                    <li><a onclick="filtrarPorColor('rojo')">Rojo</a></li>
                    <li><a onclick="filtrarPorColor('azul')">Azul</a></li>
                    <li><a onclick="filtrarPorColor('celeste')">Celeste</a></li>
                    <li><a onclick="filtrarPorColor('blanco')">Blanco</a></li>
                    <li><a onclick="filtrarPorColor('marron')">Marron</a></li>
                </ul>
            </div>

        </aside>

    )
}

export default Filtros;



