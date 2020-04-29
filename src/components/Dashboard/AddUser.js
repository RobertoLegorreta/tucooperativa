import React from 'react';

class AddUser extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      registered: false
    }

    this.toggleInterface = this.toggleInterface.bind(this); 
  }

  toggleInterface(event = false){
    if(event.target === document.getElementById('addUser'))

    this.setState({
      registered: !this.state.registered
    }); 
  }

  render(){
    let register = (
      <div>
          <div className="inputHalfScreen">
            <p>Registro</p> 
            <p id="addUserId">ID: <span>0034567</span></p>
          </div>
         
          <form>
            <input type="text" name="userName" required placeholder="Nombre del asociado (No podrá cambiar)"/>
            <input type="text"  pattern="([A-Z&]|[a-z&]{1})([AEIOU]|[aeiou]{1})([A-Z&]|[a-z&]{1})([A-Z&]|[a-z&]{1})([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])([HM]|[hm]{1})([AS|as|BC|bc|BS|bs|CC|cc|CS|cs|CH|ch|CL|cl|CM|cm|DF|df|DG|dg|GT|gt|GR|gr|HG|hg|JC|jc|MC|mc|MN|mn|MS|ms|NT|nt|NL|nl|OC|oc|PL|pl|QT|qt|QR|qr|SP|sp|SL|sl|SR|sr|TC|tc|TS|ts|TL|tl|VZ|vz|YN|yn|ZS|zs|NE|ne]{2})([^A|a|E|e|I|i|O|o|U|u]{1})([^A|a|E|e|I|i|O|o|U|u]{1})([^A|a|E|e|I|i|O|o|U|u]{1})([0-9]{2})" style={{textTransform: "uppercase"}} name="userCurp" required placeholder="CURP (No podrá cambiar)"/>
            <input type="email" name="userEmail" required placeholder="Correo electrónico"/>
            <div className="inputHalfScreen">
              <input type="tel" pattern="[0-9]{10}" name="userPhone" required placeholder="Teléfono (10 dígitos)"/>
              <input type="date" name="date" required/>
            </div>
            <input type="text" name="userAddress" required placeholder="Dirección"/>
            <input type="password" name="userPassword" required placeholder="Contraseña"/>
            <input type="text" name="userBankNumber" required placeholder="No. de cuenta / Tarjeta para pago"/>
            <div className="inputHalfScreen">
              <input type="text" name="userBankInstitution" required placeholder="Banco"/>
              <input type="text" name="userLeader" required placeholder="Referido por ID"/>
            </div>
            <input type="submit" value="Continuar" onClick={(event) => {
              if(document.getElementsByName('userName')[0].checkValidity() &&
                document.getElementsByName('userCurp')[0].checkValidity() &&
                document.getElementsByName('userEmail')[0].checkValidity() &&
                document.getElementsByName('userPhone')[0].checkValidity() &&
                document.getElementsByName('date')[0].checkValidity() &&
                document.getElementsByName('userAddress')[0].checkValidity() &&
                document.getElementsByName('userPassword')[0].checkValidity() &&
                document.getElementsByName('userBankNumber')[0].checkValidity() &&
                document.getElementsByName('userBankInstitution')[0].checkValidity() &&
                document.getElementsByName('userLeader')[0].checkValidity()){
                  this.setState({
                    registered: !this.state.registered
                  }); 
                  event.preventDefault();
              }
              }}/>
          </form>
        </div>
    ); 
  
    let success = (
      <div id="successfulRegistration">
        <div className="inputHalfScreen">
          <p>¡Bienvenido!</p> 
          <p id="addUserId">ID: <span>0034567</span></p>
        </div>
        <p>Se ha generado tu orden de pago, imprime el formato que hemos enviado a tu correo electrónico y envíalo junto con tu comprobante de pago al correo <span>alta@cooperativa.com.mx</span> con la finalidad de validar tu ingreso.</p>
        <form>
          <input type="checkbox" name="accept" required />
          <p>Acepta los términos y condiciones para continuar <a href="#"><span>Leer aquí</span></a></p>
          <input type="submit" value="Continuar" onClick={(event) => {
            this.setState({
              registered: !this.state.registered
            }); 
            this.props.addUser(event);
          }}/>
        </form>
      </div>
    ); 
  
    return (
      <div id="addUser" onClick={(event) => {
        this.toggleInterface(event); 
        this.props.addUser(event); 
      }}>
        {this.state.registered ? success : register }
      </div>
    );
  }
}

export default AddUser; 