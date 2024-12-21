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
}

export default Login;