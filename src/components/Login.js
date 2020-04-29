import React from 'react';
import "./styles.css"; 

function Login(props) {
  return (
    <div id="loginForm">
      <div>
        <p>Iniciar sesión</p>
        <form>
          <input type="email" name="name" placeholder="Correo electrónico"/>
          <input type="password" name="name" placeholder="Contraseña"/>
          <input type="submit" value="Acceder"/>
        </form>
      </div>
    </div>
  );
}

export default Login; 