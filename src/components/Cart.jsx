import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Trash2, Minus, Plus } from 'lucide-react';

function Cart() {
    const { items, removeFromCart, updateQuantity, total } = useCart();

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
                <Link to="/confirmar-pedido">
                    <button type="button">Confirmar Pedido</button>
                </Link>
                <h4>Total: S/. <span id="total">{total.toFixed(2)}</span> </h4>
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
                                    <button type="submit" onClick={() => removeFromCart(item.id)}><Trash2 className="trash-2" /></button>
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
                                    <button onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))} >
                                        <Minus size={16} />
                                    </button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} >
                                        <Plus size={16} />
                                    </button>
                                </div>
                            </td>
                            <td>S/. {item.precio.toFixed(2)} </td>
                            <td>S/. {(item.precio * item.quantity).toFixed(2)} </td>
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