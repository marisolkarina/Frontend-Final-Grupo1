import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Login() {

  return (
    <div className="login-container">
        <main class="main-login">
      
            <section class="login-section">
                <form action="" method="" class="login-form" onsubmit="iniciarSesion(event)">
                    <h2>Acceder</h2>
                    <div class="form-group">
                        <label for="loginEmail">Dirección de correo</label>
                        <input type="email" name="loginEmail" id="loginEmail" placeholder="Ingresa tu correo" required/>
                    </div>
                    <div class="form-group">
                        <label for="loginPassword">Contraseña</label>
                        <input type="password" name="loginPassword" id="loginPassword" placeholder="Ingresa tu contraseña" minlength="6" required />
                    </div>
                    <button type="submit">Iniciar sesión</button>
                </form>
                <div class="login-extra">
                    <a href="#">¿Olvidaste tu contraseña?</a>
                </div>
            </section>
            <section class="register-section">
                <h2>Registrarse</h2>
                <p>Al registrarte podrás acceder al estado de tus pedidos y tener una experiencia de compra más rápida.</p>
                <Link to="/register" >Regístrate</Link>
            </section>
        </main>
    </div>
  );

  // const loginContainerStyle = {
  //   display: 'flex',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   height: '100vh',
  //   backgroundColor: '#F6F6F6',
  //   fontFamily: "'Poppins', sans-serif",
  // };

  // const mainLoginStyle = {
  //   display: 'flex',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   flexDirection: 'column',
  //   width: '100%',
  //   maxWidth: '450px',
  //   gap: '30px',
  //   padding: '20px',
  // };

  // const sectionStyle = {
  //   width: '100%',
  //   padding: '30px',
  //   borderRadius: '12px',
  //   background: '#FFFFFF',
  //   boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
  //   fontFamily: "'Poppins', sans-serif",
  //   transition: 'transform 0.3s ease',
  //   maxWidth: '700px'
  // };

  // const formStyle = {
  //   display: 'flex',
  //   flexDirection: 'column',
  //   gap: '20px',
  // };

  // const formGroupStyle = {
  //   display: 'flex',
  //   flexDirection: 'column',
  // };

  // const labelStyle = {
  //   fontSize: '1.1rem',
  //   color: '#333',
  //   marginBottom: '8px',
  // };

  // const inputStyle = {
  //   padding: '12px',
  //   fontSize: '1rem',
  //   border: '1px solid #ddd',
  //   borderRadius: '8px',
  //   boxShadow: '0 0 12px rgba(0, 0, 0, 0.05)',
  //   transition: 'border-color 0.3s ease',
  // };

  // const inputFocusStyle = {
  //   borderColor: '#C70039',
  // };

  // const buttonStyle = {
  //   padding: '12px',
  //   backgroundColor: '#C70039',
  //   color: '#FFFFFF',
  //   border: 'none',
  //   borderRadius: '8px',
  //   cursor: 'pointer',
  //   fontSize: '1.1rem',
  //   transition: 'background-color 0.3s, transform 0.2s ease',
  // };

  // const buttonHoverStyle = {
  //   backgroundColor: '#A6002D',
  //   transform: 'scale(1.05)',
  // };

  // const extraStyle = {
  //   marginTop: '15px',
  //   textAlign: 'center',
  //   fontSize: '1rem',
  // };

  // const iconStyle = {
  //   width: '120px', // Icono más grande
  //   height: '120px', // Icono más grande
  //   marginBottom: '20px', // Separación con el texto
  //   transition: 'transform 0.3s ease',
  // };

  // return (
  //   <div style={loginContainerStyle}>
  //     <main style={mainLoginStyle}>
  //       <section style={sectionStyle}>
  //         <form style={formStyle} onSubmit="iniciarSesion(event)">
  //           <h2 style={{ textAlign: 'center', fontSize: '2.5rem', color: '#C70039', marginBottom: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  //             <img src="https://img.icons8.com/ios/452/dog.png" alt="Logo perro" style={iconStyle} />
  //             Acceder
  //           </h2>

  //           <div style={formGroupStyle}>
  //             <label htmlFor="loginEmail" style={labelStyle}>Dirección de correo</label>
  //             <input
  //               type="email"
  //               name="loginEmail"
  //               id="loginEmail"
  //               placeholder="Ingresa tu correo"
  //               required
  //               style={inputStyle}
  //               onFocus={(e) => (e.target.style = {...inputStyle, ...inputFocusStyle})}
  //               onBlur={(e) => (e.target.style = inputStyle)}
  //             />
  //           </div>

  //           <div style={formGroupStyle}>
  //             <label htmlFor="loginPassword" style={labelStyle}>Contraseña</label>
  //             <input
  //               type="password"
  //               name="loginPassword"
  //               id="loginPassword"
  //               placeholder="Ingresa tu contraseña"
  //               minLength="6"
  //               required
  //               style={inputStyle}
  //               onFocus={(e) => (e.target.style = {...inputStyle, ...inputFocusStyle})}
  //               onBlur={(e) => (e.target.style = inputStyle)}
  //             />
  //           </div>

  //           <button
  //             style={buttonStyle}
  //             onMouseEnter={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
  //             onMouseLeave={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
  //             type="submit"
  //           >
  //             Iniciar sesión
  //           </button>
  //         </form>

  //         <div className="login-extra" style={extraStyle}>
  //           <a href="#">¿Olvidaste tu contraseña?</a>
  //         </div>
  //       </section>

  //       <section style={sectionStyle}>
  //         <h2 style={{ fontSize: '1.8rem', color: '#333' }}>Registrarse</h2>
  //         <p style={{ fontSize: '1.1rem', color: '#666' }}>
  //           Al registrarte podrás acceder al estado de tus pedidos y tener una experiencia de compra más rápida.
  //         </p>
  //         <Link to="/register" style={{ fontSize: '1.2rem', color: '#C70039', fontWeight: 'bold' }}>Regístrate</Link>
  //       </section>
  //     </main>
  //   </div>
  // );
}

export default Login;
