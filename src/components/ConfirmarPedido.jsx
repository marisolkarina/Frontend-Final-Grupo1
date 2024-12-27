import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom"; // Importamos useNavigate

function ConfirmarPedido() {
    const [datosPersonales, setDatosPersonales] = useState({ nombre: "", apellido: "", dni: "" });
    const [datosEnvio, setDatosEnvio] = useState({ direccion: "", pais: "", region: "", ciudad: "", codigoPostal: "", telefono: "" });
    const [datosPago, setDatosPago] = useState({ numeroTarjeta: "", fechaVencimiento: "", cvv: "", nombreTitular: "", apellidoTitular: "", correo: "" });
    const { items, clearCart, total } = useCart(); // Cambié cart por items
    const navigate = useNavigate(); // Hook para navegación

    const handleInputChange = (e, setFunction) => {
        const { name, value } = e.target;
        setFunction((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Generar un ID único para el pedido
        const pedidoId = Math.floor(Math.random() * 1000000); // Genera un ID aleatorio
        const fechaPedido = new Date().toLocaleDateString(); // Fecha de pedido actual
        const fechaEntrega = new Date(new Date().setDate(new Date().getDate() + 5)).toLocaleDateString(); // Fecha de entrega en 5 días

        // Crear mensaje de confirmación
        let productosMensaje = "";
        items.forEach(item => {
            productosMensaje += `- ${item.nombre}: ${item.quantity}\n`;
        });

        const mensaje = `
            ¡Pedido exitoso!
            Pedido ID: ${pedidoId}
            Productos:
            ${productosMensaje}
            Total: S/. ${total.toFixed(2)}
            Estado: pendiente
            Fecha de pedido: ${fechaPedido}
            Fecha de entrega: ${fechaEntrega}
        `;

        // Mostrar mensaje de confirmación con la alerta
        if (window.confirm(mensaje)) {
            // Si el usuario acepta la alerta, redirigir a la página principal
            clearCart(); // Limpiar el carrito
            navigate("/"); // Redirigir a la página principal ("/")
        }
    };

    return (
        <div className="grid-container-confirmar-pedido">
            <main className="main-confirmar-pedido">
                <section>
                    <h4>Información Personal</h4>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="nombre">Nombre:</label>
                        <input type="text" id="nombre" name="nombre" value={datosPersonales.nombre} onChange={(e) => handleInputChange(e, setDatosPersonales)} required />

                        <label htmlFor="apellido">Apellido:</label>
                        <input type="text" id="apellido" name="apellido" value={datosPersonales.apellido} onChange={(e) => handleInputChange(e, setDatosPersonales)} required />

                        <label htmlFor="dni">DNI:</label>
                        <input type="text" id="dni" name="dni" value={datosPersonales.dni} onChange={(e) => handleInputChange(e, setDatosPersonales)} required />
                    </form>

                </section>

                <section>
                    <h4>Datos de Envío</h4>
                    <form>
                        <label htmlFor="direccion">Dirección de Envío:</label>
                        <input type="text" id="direccion" name="direccion" value={datosEnvio.direccion} onChange={(e) => handleInputChange(e, setDatosEnvio)} required />

                        <label htmlFor="pais">País:</label>
                        <input type="text" id="pais" name="pais" value={datosEnvio.pais} onChange={(e) => handleInputChange(e, setDatosEnvio)} required />

                        <label htmlFor="region">Región:</label>
                        <input type="text" id="region" name="region" value={datosEnvio.region} onChange={(e) => handleInputChange(e, setDatosEnvio)} required />

                        <label htmlFor="ciudad">Ciudad:</label>
                        <input type="text" id="ciudad" name="ciudad" value={datosEnvio.ciudad} onChange={(e) => handleInputChange(e, setDatosEnvio)} required />

                        <label htmlFor="codigoPostal">Código Postal:</label>
                        <input type="text" id="codigoPostal" name="codigoPostal" value={datosEnvio.codigoPostal} onChange={(e) => handleInputChange(e, setDatosEnvio)} required />

                        <label htmlFor="telefono">Teléfono de Contacto:</label>
                        <input type="tel" id="telefono" name="telefono" value={datosEnvio.telefono} onChange={(e) => handleInputChange(e, setDatosEnvio)} required />
                    </form>
                </section>

                <section>
                    <h4>Información de Pago</h4>
                    <form>
                        <label htmlFor="numeroTarjeta">Número de Tarjeta:</label>
                        <input type="text" id="numeroTarjeta" name="numeroTarjeta" value={datosPago.numeroTarjeta} onChange={(e) => handleInputChange(e, setDatosPago)} required />

                        <label htmlFor="fechaVencimiento">Fecha de Vencimiento:</label>
                        <input type="month" id="fechaVencimiento" name="fechaVencimiento" value={datosPago.fechaVencimiento} onChange={(e) => handleInputChange(e, setDatosPago)} required />

                        <label htmlFor="cvv">CVV:</label>
                        <input type="text" id="cvv" name="cvv" value={datosPago.cvv} onChange={(e) => handleInputChange(e, setDatosPago)} required />

                        <label htmlFor="nombreTitular">Nombre del Titular:</label>
                        <input type="text" id="nombreTitular" name="nombreTitular" value={datosPago.nombreTitular} onChange={(e) => handleInputChange(e, setDatosPago)} required />

                        <label htmlFor="apellidoTitular">Apellido del Titular:</label>
                        <input type="text" id="apellidoTitular" name="apellidoTitular" value={datosPago.apellidoTitular} onChange={(e) => handleInputChange(e, setDatosPago)} required />

                        <label htmlFor="correo">Correo Electrónico:</label>
                        <input type="email" id="correo" name="correo" value={datosPago.correo} onChange={(e) => handleInputChange(e, setDatosPago)} required />
                    </form>
                </section>

                <section>
                    <h4>Carrito</h4>
                    {items && items.length > 0 ? (
                        <ul>
                            {items.map((item) => (
                                <li key={item.id}>
                                    {item.nombre} - Cantidad: {item.quantity} - Precio: S/. {(item.precio * item.quantity).toFixed(2)}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>El carrito está vacío.</p>
                    )}
                </section>

                <section className="confirmar">
                    <button onClick={handleSubmit}>Confirmar Pedido</button>
                </section>

                </main>
        </div>

        
    );
}

export default ConfirmarPedido;
