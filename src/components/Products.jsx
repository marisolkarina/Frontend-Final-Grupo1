import React from 'react';
import Filtros from './Filtros';

function Products() {
    return (
        <div className='grid-container-index'>
            <Filtros />
            <main className="main-index" id="misProductos">
                <div class="producto">
                    <figure>
                        <img src="https://www.cochikis.pe/wp-content/uploads/2022/07/alfombracognitiva1.jpg" alt="alfombra" />
                        <figcaption class="producto__titulo">Alfombra Cognitiva Estrella</figcaption>
                    </figure>
                    <div class="producto__caracteristicas">
                        <p>S/. 100.00 </p>
                        <p>Categoría: perro</p>
                        <p>Color: rojo</p>
                        <p>Descripcion</p>
                    </div>
                    <div class="producto__carrito">
                        <input type="number" min="1" step="1" id="cantidad1" value="1"/>
                        <button type="submit" onclick='agregarMiProducto(${prod.id})'>Agregar producto</button>
                    </div>
                </div>

                <div class="producto">
                    <figure>
                        <img src="https://www.cochikis.pe/wp-content/uploads/2022/07/alfombracognitiva1.jpg" alt="alfombra" />
                        <figcaption class="producto__titulo">Alfombra Cognitiva Estrella</figcaption>
                    </figure>
                    <div class="producto__caracteristicas">
                        <p>S/. 100.00 </p>
                        <p>Categoría: perro</p>
                        <p>Color: rojo</p>
                        <p>Descripcion</p>
                    </div>
                    <div class="producto__carrito">
                        <input type="number" min="1" step="1" id="cantidad1" value="1"/>
                        <button type="submit" onclick='agregarMiProducto(${prod.id})'>Agregar producto</button>
                    </div>
                </div>

                <div class="producto">
                    <figure>
                        <img src="https://www.cochikis.pe/wp-content/uploads/2022/07/alfombracognitiva1.jpg" alt="alfombra" />
                        <figcaption class="producto__titulo">Alfombra Cognitiva Estrella</figcaption>
                    </figure>
                    <div class="producto__caracteristicas">
                        <p>S/. 100.00 </p>
                        <p>Categoría: perro</p>
                        <p>Color: rojo</p>
                        <p>Descripcion</p>
                    </div>
                    <div class="producto__carrito">
                        <input type="number" min="1" step="1" id="cantidad1" value="1"/>
                        <button type="submit" onclick='agregarMiProducto(${prod.id})'>Agregar producto</button>
                    </div>
                </div>

                <div class="producto">
                    <figure>
                        <img src="https://www.cochikis.pe/wp-content/uploads/2022/07/alfombracognitiva1.jpg" alt="alfombra" />
                        <figcaption class="producto__titulo">Alfombra Cognitiva Estrella</figcaption>
                    </figure>
                    <div class="producto__caracteristicas">
                        <p>S/. 100.00 </p>
                        <p>Categoría: perro</p>
                        <p>Color: rojo</p>
                        <p>Descripcion</p>
                    </div>
                    <div class="producto__carrito">
                        <input type="number" min="1" step="1" id="cantidad1" value="1"/>
                        <button type="submit" onclick='agregarMiProducto(${prod.id})'>Agregar producto</button>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Products;
