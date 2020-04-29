import React from 'react';

function Tree(props) {
  return (
    <div id="tree">
      <section>
        <div>
          <User userId="0002930" userName="Roberto" userLeader="Jorge" handleClick={props.addUser}></User>
          <User handleClick={props.addUser}></User>
          <User userId="0002930" userName="Roberto" userLeader="Jorge" handleClick={props.addUser}></User>
          <User handleClick={props.addUser}></User>
          <User handleClick={props.addUser}></User>
          <User userId="0002930" userName="Roberto" userLeader="Jorge" handleClick={props.addUser}></User>
          <User userId="0002930" userName="Roberto" userLeader="Jorge" handleClick={props.addUser}></User>
          <User handleClick={props.addUser}></User>
        </div>
        <div>
          <User handleClick={props.addUser}></User>
          <User userId="0002930" userName="Roberto" userLeader="Jorge" handleClick={props.addUser}></User>
          <User handleClick={props.addUser}></User>
          <User userId="0002930" userName="Roberto" userLeader="Jorge" handleClick={props.addUser}></User>
        </div>
        <div>
          <User handleClick={props.addUser}></User>
          <User userId="0002930" userName="Roberto" userLeader="Jorge" handleClick={props.addUser}></User>
        </div>
        <div>
          <User userId="0002930" userName="Roberto" userLeader="Jorge" handleClick={props.addUser}></User>
        </div>
      </section>
    </div>
  );
}

function User(props){
  let image = (
    <figure>
      <img alt="Add user" src="./add.svg"></img>
    </figure>
  ); 

  let userData = (
    <div>
      <p>ID: {props.userId}</p>
      <p>{props.userName}</p>
      <p>{props.userLeader}</p>
    </div>
  ); 

  return(
    <div className={props.userId || "treeAddUser"} onClick={props.userId ? ()=>{} : props.handleClick}>
      {props.userId ? userData: image}
    </div>
  ); 
}

export default Tree; 