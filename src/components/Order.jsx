import React, { useState } from 'react';
import visaImagen from './../assets/logo-visa.jpg';
import { useCart } from '../context/CartContext';

function Order() {

    const { items, total } = useCart();
    const [modalVisible, setModalVisible] = useState(false);
    const [pedido, setPedido] = useState({
        direccion: "",
        productos: [],
        montoTotal: 0,
    });

    const confirmarPedido = (e) => {
        e.preventDefault();
        const datosDireccion = {
            direccion: document.getElementById('direccion').value,
            pais: document.getElementById('pais').value,
            region: document.getElementById('region').value,
            ciudad: document.getElementById('ciudad').value,
            codigoPostal: document.getElementById('codigo-postal').value,
            telefono: document.getElementById('telefono').value,
        };

        setPedido({
            direccion: `${datosDireccion.direccion}, ${datosDireccion.ciudad}, ${datosDireccion.region}, ${datosDireccion.pais}, ${datosDireccion.codigoPostal}`,
            productos: items,
            montoTotal: total,
        });

        setModalVisible(true);
    };

    const cerrarModal = () => setModalVisible(false);

    return(
        <main class="main-pedido">
            <div class="finalizar-pedido">
                <div>
                    <section>
                        <h4>Información Personal</h4>
                        <form action="" method="POST">
                            <div>
                                <label for="nombre">Nombre:</label>
                                <input type="text" id="nombre" name="nombre" required/>
                            </div>
                            <div>
                                <label for="apellido">Apellido:</label>
                                <input type="text" id="apellido" name="apellido" required/>
                            </div>
                            <div>
                                <label for="dni">DNI:</label>
                                <input type="text" id="dni" name="dni" required/>
                            </div>
                            <button type="submit">Guardar</button>
                        </form>
                    </section>

                    <div class="envioPago">
                        <section>
                            <h4>Datos de Envío</h4>
                            <form action="" method="POST">
                                <div>
                                    <label for="direccion">Dirección de Envío:</label>
                                    <input type="text" id="direccion" name="direccion" required/>
                                </div>
                                <div>
                                    <label for="pais">País:</label>
                                    <input type="text" id="pais" name="pais" required/>
                                </div>
                                <div>
                                    <label for="region">Región:</label>
                                    <input type="text" id="region" name="region" required/>
                                </div>
                                <div>
                                    <label for="ciudad">Ciudad:</label>
                                    <input type="text" id="ciudad" name="ciudad" required/>
                                </div>
                                <div>
                                    <label for="codigo-postal">Código Postal:</label>
                                    <input type="text" id="codigo-postal" name="codigo-postal" required/>
                                </div>
                                <div>
                                    <label for="telefono">Teléfono de Contacto:</label>
                                    <input type="tel" id="telefono" name="telefono" required/>
                                </div>
                                <button type="submit">Guardar</button>
                            </form>
                        </section>

                        <section>
                            <h4>Información de Pago</h4>
                            <form action="" method="POST">
                                <div className='tarjeta'>
                                    <input type="text" id="numero-tarjeta" name="numero-tarjeta" maxlength="16" pattern="\d{16}" required/>
                                    <img src={visaImagen} alt="Logo Visa"/>
                                </div>
                                <div>
                                    <label for="fecha-vencimiento">Fecha de Vencimiento:</label>
                                    <input type="month" id="fecha-vencimiento" name="fecha-vencimiento" required/>
                                </div>
                                <div>
                                    <label for="cvv">CVV:</label>
                                    <input type="text" id="cvv" name="cvv" maxlength="3" pattern="\d{3}" required/>
                                </div>
                                <div>
                                    <label for="nombre-tarjeta">Nombres del Titular:</label>
                                    <input type="text" id="nombre-tarjeta" name="nombre-tarjeta" required/>
                                </div>
                                <div>
                                    <label for="apellido-tarjeta">Apellidos del Titular:</label>
                                    <input type="text" id="apellido-tarjeta" name="apellido-tarjeta" required/>
                                </div>
                                <div>
                                    <label for="correo">Correo Electrónico:</label>
                                    <input type="email" id="correo" name="correo" required/>
                                </div>
                                <button type="submit">Guardar</button>
                            </form>
                        </section>

                    </div>

                    <section class="confirmar-pedido">
                        <form action="" method="" onSubmit={confirmarPedido}>
                            <button type="submit">Confirmar Pedido</button>
                        </form>
                    </section>
                </div>
            </div>

            {modalVisible && (
                <div className="modal">
                    <div className="modal-content">
                        <h3>Detalles del Pedido</h3>
                        <p><strong>Dirección de Envío:</strong> {pedido.direccion}</p>
                        <h4>Productos:</h4>
                        <ul>
                            {pedido.productos.map((producto) => (
                                <li key={producto.id}>
                                    {producto.nombre} - Cantidad: {producto.quantity} - Precio: S/.{producto.precio.toFixed(2)}
                                </li>
                            ))}
                        </ul>
                        <p><strong>Monto Total:</strong> S/.{pedido.montoTotal.toFixed(2)}</p>
                        <button onClick={cerrarModal}>Cerrar</button>
                    </div>
                    <div className="close" onClick={cerrarModal}></div>
                </div>
            )}
        </main>
    );
    
}

export default Order;