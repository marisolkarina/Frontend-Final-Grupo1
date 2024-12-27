import React, { useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import Filtros from './Filtros';

const productos = [
    {
        id: "100",
        nombre: "Alfombra Cognitiva Estrella",
        urlImagen: "https://www.cochikis.pe/wp-content/uploads/2022/07/alfombracognitiva1.jpg",
        descripcion: "Estimula las habilidades cognitivas de tu mascota con nuestra alfombra cognitiva estrella que posee capas para esconder treats y estimular el instinto de rastreo y olfato.",
        precio: 129.00,
        categoria: "perro",
        color: "rojo"
    },
    {
        id: "200",
        nombre: "Accecan Collar Michi Flores",
        urlImagen: "https://www.cochikis.pe/wp-content/uploads/2023/04/accecan-collar-corbatita-michi-miniflores.jpg",
        descripcion: "Estimula las habilidades cognitivas de tu mascota con nuestra alfombra cognitiva estrella que posee capas para esconder treats y estimular el instinto de rastreo y olfato.",
        precio: 15.00,
        categoria: "gato",
        color: "celeste"
    },
    {
        id: "300",
        nombre: "Ferplast Ball With Bell 5.5 CM",
        urlImagen: "https://www.cochikis.pe/wp-content/uploads/2023/09/ferplast-pelota-para-roedores-5cm.jpg",
        descripcion: "Pelota de ingredientes naturales con un cascabel dentro. Sirve para reducir el crecimiento excesivo de los dientes. Este juego dental es ideal como pasatiempo para los roedores.",
        precio: 13.00,
        categoria: "conejo",
        color: "marron"
    },
    {
        id: "400",
        nombre: "Bandana con Gel Refrescante",
        urlImagen: "https://www.cochikis.pe/wp-content/uploads/2024/01/1-2.jpg",
        descripcion: "¡Mantén fresco a tu engreído! Elaborado con tejido de enfriamiento instantáneo de malla transpirable. Es suave y cómodo para la mascota. Contiene cristal de hielo (gel) en el interior.",
        precio: 18.00,
        categoria: "perro",
        color: "azul"
    },
    {
        id: "500",
        nombre: "Blue Stars Polo Basic Blanco",
        urlImagen: "https://www.cochikis.pe/wp-content/uploads/2023/12/2-1.jpg",
        descripcion: "Se puede usar de día o de noche. Elaborado de tela rib acanalada, un material suave al tacto que garantiza comodidad para su mascota, además que es súper resistente.",
        precio: 30.00,
        categoria: "gato",
        color: "blanco"
    }
]

function Products() {
    const [tipoOrden, setTipoOrden] = useState("");
    const [precioMin, setPrecioMin] = useState(0);
    const [precioMax, setPrecioMax] = useState(Infinity);
    const { tipoFiltro, palabra } = useParams();

    const productosFinales = useMemo(() => {
        //por categoria o color
        let productosFiltrados = productos;
        if (tipoFiltro) {
            productosFiltrados = productosFiltrados.filter( producto =>
                producto.categoria.toLowerCase() === tipoFiltro.toLowerCase() ||
                producto.color.toLowerCase() === tipoFiltro.toLowerCase()
            )
        }

        if (tipoOrden === "1") { //alfabetico
            productosFiltrados = [...productosFiltrados].sort((a, b) => a.nombre.localeCompare(b.nombre));
        }
        if (tipoOrden === "2") { // precio ascendente
            productosFiltrados = [...productosFiltrados].sort((a, b) => a.precio - b.precio);
        }
        if (tipoOrden === "3") { // precio descendente
            productosFiltrados = [...productosFiltrados].sort((a, b) => b.precio - a.precio);
        }

        productosFiltrados = productosFiltrados.filter(
            (producto) => producto.precio >= precioMin && producto.precio <= precioMax
        );

        // busqueda por palabra en nombre o descripcion del producto
        if (palabra) {
            productosFiltrados = productos.filter(prod =>
                prod.nombre.toLowerCase().includes(palabra.toLowerCase()) ||
                prod.descripcion.toLowerCase().includes(palabra.toLowerCase())
            );
        }

        return productosFiltrados;
    }, [tipoFiltro, tipoOrden, precioMin, precioMax, palabra]);

    return (
        <div className="grid-container-index">
            <Filtros setTipoOrden={setTipoOrden} setPrecioMin={setPrecioMin} setPrecioMax={setPrecioMax}/>
            <main className="main-index" id="misProductos">
                {productosFinales.length === 0 ? (
                    
                    <p>No hay productos de ese tipo.</p>
                ) : (
                    productosFinales.map(producto => (

                        <div key={producto.id} className="producto">
                            <figure>
                                <img src={producto.urlImagen} alt={producto.nombre} />
                                <figcaption className="producto__titulo">{producto.nombre}</figcaption>
                            </figure>
                            <div className="producto__caracteristicas">
                                <p>S/. {producto.precio.toFixed(2)}</p>
                                <p>Categoría: {producto.categoria}</p>
                                <p>Color: {producto.color}</p>
                                <p>{producto.descripcion}</p>
                            </div>
                            <div className="producto__carrito">
                                <input type="number" min="1" step="1" id={`cantidad${producto.id}`} value="1"/>
                                <button type="submit" onClick={() => agregarMiProducto(producto.id)}>Agregar producto</button>
                            </div>
                        </div>
                    ))
                )}
                

            </main>
            
        
        </div>
    )
}

export default Products;
