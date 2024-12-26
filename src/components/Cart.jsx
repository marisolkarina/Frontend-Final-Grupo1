import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Trash2 } from 'lucide-react';

function Cart() {
    const { items } = useCart();

    if (items.length === 0) {
        return (
            <main class="main-carrito">
                <h3>No se han agregado productos</h3>
                <div class="carrito__continuar">
                    <Link to="/">Seguir comprando</Link>
                </div>
            </main>
        );
      }
    return (
        <main class="main-carrito">
            <h3>Carrito de compras</h3>

            <div class="carrito__confirmar">
                <form method="">
                    <button type="submit">Confirmar pedido</button>
                </form>
                <h4>Total: S/. <span id="total"></span> </h4>
            </div>

            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th></th>
                        <th>Producto</th>
                        <th>Color</th>
                        <th>Categoria</th>
                        <th>Cantidad</th>
                        <th>Precio Unitario</th>
                        <th>Subtotal</th>
                    </tr>
                </thead>
                <tbody id="contenidoCarrito">
                    {items.map(item => (
                        <tr id={`prod${item.id}`}>
                            <td>
                                <div class="carrito__eliminar">
                                    <button type="submit" ><Trash2 className="trash-2" /></button>
                                </div>
                            </td>
                            <td>
                                <img src={item.urlImagen} alt={item.nombre} />
                            </td>
                            <td>
                                <p>{item.nombre}</p>
                            </td>
                            <td>{item.color}</td>
                            <td>{item.categoria}</td>
                            <td>
                                <div class="carrito__actualizar">
                                    <input type="number" name="cantidad" value={item.quantity} id={`cantNueva${item.id}`}  min="1" />
                                    <button type="submit" >Actualizar</button>
                                </div>
                            </td>
                            <td>S/. {item.precio} </td>
                            <td>S/. {item.precio * item.cantidad} </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div class="carrito__continuar">
                <Link to="/">Seguir comprando</Link>
            </div>
        </main>
    )
}

export default Cart;