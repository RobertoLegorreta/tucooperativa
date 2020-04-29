import React from 'react';

function Navbar(props) {
  return (
    <div id="navbar">
      <MainData profileData={props.profileData}></MainData>
      <Division title="Datos" edit="true" menu="extraData" editUser={props.editUser}></Division>
      <ExtraData profileData={props.profileData}></ExtraData>
      <p id="myPeople">Registro de ingresos</p>
      <Division title="Nivel de mesa" menu="tables"></Division>
      <Tables></Tables>
    </div>
  );
}

function MainData(props){
  return (
    <div id="mainData">
      <figure>
        <img alt="profile" src="./profile.svg"></img>
      </figure>
      <div>
        <div>
          <p id="userScore">Puntos: <span>{props.profileData.userScore}</span></p>
          <p id="userId">ID: <span>{props.profileData.userId}</span></p>
        </div>
        <div>
          <p id="userName">Nombre: <span>{props.profileData.userName}</span></p>
          <p id="userLeader">Ingresó: <span>{props.profileData.userLeader}</span></p>
        </div>
      </div>
    </div>
  ); 
}

function ExtraData(props){
  return (
    <div id="extraData">
      <p id="userEmail">{props.profileData.userEmail}</p>
      <p id="userPassword">********</p>
      <p id="userPhone">{props.profileData.userPhone}</p>
      <p id="userAddress">{props.profileData.userAddress}</p>
      <p id="userAdmission">{props.profileData.userAdmission}</p>
    </div>
  ); 
}

function Division(props){
  function toggleMenu(menu, element){    
    let x = document.getElementById(menu);
    if (x.style.display === "none") {
      x.style.display = "block";
      element.classList.remove('rotate'); 
    } else {
      x.style.display = "none";
      element.classList.add('rotate'); 
    }
  }

  let edit = (
    <figure onClick={props.editUser}>
      <img alt="Edit profile data" src="./pencil.svg"></img>
    </figure> 
  ); 

  let collapse = (
    <figure className="collapse" onClick={(e) => {toggleMenu(props.menu, e.target)}}>
      <img alt="Collapse menu" src="./expand.svg"></img>
    </figure> 
  ); 

  return (
    <div className="division">
      <div>
        {collapse}
        <p>{props.title}</p>
      </div>
      {props.edit? edit: null}
    </div>
  ); 
}

function Tables(props){
  return (
    <div id="tables">
      <p className="tableSelected">Primer mesa</p>
      <p>Segunda mesa</p>
      <p>Tercer mesa</p>
      <p>Cuarta mesa</p>
      <p>Quinta mesa</p>
    </div>
  ); 
}

export default Navbar; 