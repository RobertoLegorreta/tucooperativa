import React from 'react';

function Header(props) {
  return (
    <div id="header">
      <p>TU COOPERATIVA</p>
      <div>
        <p onClick={props.signOut}>Salir</p>
        <p>Ayuda</p>
      </div>
    </div>
  );
}

export default Header; 