import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className='footer'>
            <div>
                <p>Av. Brasil 210, Breña</p>
                <p>Horario de atención: Lunes a Sábado de 9:00 am a 7:30 pm</p>
            </div>
            <div>
                <p>Teléfono: 920 000 965</p>
                <p>Correo: ventas@petshop.pe</p>
            </div>
            <div className="footer__redes">
                <a href=""><i className="bi bi-facebook"></i></a>
                <a href=""><i className="bi bi-whatsapp"></i></a>
                <a href=""><i className="bi bi-instagram"></i></a>
            </div>
        </footer>
    )
}

export default Footer;
