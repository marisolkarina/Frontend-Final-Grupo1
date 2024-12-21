import React, { useState } from 'react';

function Register() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [strength, setStrength] = useState(0);
  const [modalMessage, setModalMessage] = useState(''); // Mensaje del modal
  const [showModal, setShowModal] = useState(false); // Controlar si el modal es visible

  // Función para guardar usuarios en el localStorage
  function guardarUsuarios(usuarios) {
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
  }

  // Función para obtener usuarios desde el localStorage
  function obtenerUsuarios() {
    const usuarios = localStorage.getItem('usuarios');
    return usuarios ? JSON.parse(usuarios) : [];
  }

  // Función para mostrar el modal
  const showModalWindow = (message) => {
    setModalMessage(message);
    setShowModal(true);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setShowModal(false);
  };

  // Manejar el cambio de la contraseña
  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    // Lógica para calcular la fuerza de la contraseña
    if (value.length < 6) {
      setStrength(0);
    } else if (value.length < 10) {
      setStrength(50);
    } else {
      setStrength(100);
    }
  };

  // Manejar el cambio de la confirmación de la contraseña
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  // Manejo del formulario de registro
  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      showModalWindow('Las contraseñas no coinciden');
      return;
    }

    // Obtener los usuarios actuales
    const listaUsuarios = obtenerUsuarios();

    // Verificar si el correo ya está registrado
    const email = document.getElementById('email').value.trim();
    if (listaUsuarios.some(u => u.email === email)) {
      showModalWindow('El correo ya está registrado.');
      return;
    }

    // Crear el nuevo usuario
    const nombres = document.getElementById('nombres').value.trim();
    const apellidos = document.getElementById('apellidos').value.trim();
    const dni = document.getElementById('dni').value.trim();
    const id = Math.floor(Math.random() * 1000).toString();

    const nuevoUsuario = { id, nombres, apellidos, email, dni, password };
    listaUsuarios.push(nuevoUsuario);

    // Guardar los usuarios actualizados
    guardarUsuarios(listaUsuarios);

    // Iniciar sesión automáticamente después del registro
    localStorage.setItem('usuarioActivo', JSON.stringify(nuevoUsuario));

    // Ver el usuario registrado en consola
    console.log('Usuario registrado:', nuevoUsuario);

    // Mostrar el modal de éxito
    showModalWindow('Registro exitoso. Iniciando sesión...');

    // Redirigir o mostrar un mensaje de éxito
    setTimeout(() => {
      window.location.href = '/home'; // Cambia a la URL de la página principal que desees
    }, 2000); // Espera 2 segundos antes de redirigir
  };

  return (
    <div>
      <main className="main-registro">
        <div>
          <form onSubmit={handleSubmit}>
            <h2>Regístrate</h2>

            <div>
              <label htmlFor="nombres">Nombres</label>
              <input type="text" name="nombres" id="nombres" required />
            </div>

            <div>
              <label htmlFor="apellidos">Apellidos</label>
              <input type="text" name="apellidos" id="apellidos" required />
            </div>

            <div>
              <label htmlFor="email">Dirección de correo</label>
              <input type="email" name="email" id="email" required />
            </div>

            <div>
              <label htmlFor="dni">DNI</label>
              <input type="text" name="dni" id="dni" required />
            </div>

            <div>
              <label htmlFor="password">Contraseña</label>
              <p>Min: 6 caracteres</p>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
              <small id="password-strength-text">Fuerza de la contraseña</small>
              <div id="password-strength-bar" style={{ backgroundColor: strength > 50 ? 'green' : 'red' }}>
                <div
                  role="progressbar"
                  style={{ width: `${strength}%`, height: '5px', backgroundColor: 'green' }}
                ></div>
              </div>
            </div>

            <div>
              <label htmlFor="confirmPassword">Vuelva a escribir la contraseña</label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                required
              />
            </div>

            <p>
              Se enviará un mensaje a tu dirección de correo electrónico como bienvenida.
            </p>

            <p>
              Tus datos personales se utilizarán para procesar tu pedido, mejorar tu
              experiencia en esta web, gestionar el acceso a tu cuenta y otros
              propósitos descritos en nuestra <a href="#">política de privacidad</a>.
            </p>

            <button type="submit">Regístrate</button>
          </form>
        </div>

        <div className="opcionLogin">
          <h2>Iniciar sesión</h2>
          <p>
            Al iniciar sesión, tendrás acceso a tu historial de pedidos, podrás gestionar
            tus datos personales y seguir el estado de tus compras. Asegúrate de ingresar
            correctamente tu dirección de correo electrónico y contraseña para evitar problemas de
            acceso.
          </p>
          <a href="/login">Iniciar sesión</a>
        </div>
      </main>

      {/* Modal de éxito o error */}
      {showModal && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>&times;</span>
            <p>{modalMessage}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Register;
