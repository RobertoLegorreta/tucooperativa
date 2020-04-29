import React from 'react';

class EditUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmail: "", 
      userPhone: "", 
      userAddress: "", 
      userPassword: "", 
      userBankNumber: "", 
      userBankInstitution: ""
    }

    this.handleInputChange = this.handleInputChange.bind(this); 
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });

    event.target.required = true;
  }

  render(){
    return (
      <div id="editUser" onClick={this.props.disable}>
        <div>
          <div className="inputHalfScreen">
            <p>Editar perfil</p> 
            <p id="addUserId">ID: <span>0034567</span></p>
          </div>
          <form id="editUserForm">
            <input type="email" name="userEmail" placeholder={this.props.profileData.userEmail} onChange={this.handleInputChange}/>
            <input type="tel" pattern="[0-9]{10}" name="userPhone" placeholder={this.props.profileData.userPhone} onChange={this.handleInputChange}/>
            <input type="text" name="userAddress" placeholder={this.props.profileData.userAddress} onChange={this.handleInputChange}/>
            <input type="password" name="userPassword" placeholder="********" onChange={this.handleInputChange}/>
            <input type="text" name="userBankNumber" placeholder={this.props.profileData.userBankNumber} onChange={this.handleInputChange}/>
            <input type="text" name="userBankInstitution" placeholder={this.props.profileData.userBankInstitution} onChange={this.handleInputChange}/>
            <div className="inputHalfScreen">
              <input type="submit" value="Continuar" onClick={(event) => {
                  let newUserData = {}; 
                  newUserData = this.state.userEmail ? Object.assign(newUserData, {userEmail: this.state.userEmail}) : newUserData;  
                  newUserData = this.state.userPhone ? Object.assign(newUserData, {userPhone: this.state.userPhone}) : newUserData;  
                  newUserData = this.state.userAddress ? Object.assign(newUserData, {userAddress: this.state.userAddress}) : newUserData;  
                  newUserData = this.state.userPassword ? Object.assign(newUserData, {userPassword: this.state.userPassword}) : newUserData;  
                  newUserData = this.state.userBankNumber ? Object.assign(newUserData, {userBankNumber: this.state.userBankNumber}) : newUserData;  
                  newUserData = this.state.userBankInstitution ? Object.assign(newUserData, {userBankInstitution: this.state.userBankInstitution}) : newUserData;  
                  
                  if(this.state.userEmail || this.state.userPhone || this.state.userAddress || this.state.userPassword || this.state.userBankNumber || this.state.userBankInstitution ){
                      if(document.getElementsByName('userEmail')[0].checkValidity() &&
                      document.getElementsByName('userPhone')[0].checkValidity() &&
                      document.getElementsByName('userAddress')[0].checkValidity() &&
                      document.getElementsByName('userPassword')[0].checkValidity() &&
                      document.getElementsByName('userBankNumber')[0].checkValidity() &&
                      document.getElementsByName('userBankInstitution')[0].checkValidity()){
                        this.props.modifyUserData(event, newUserData)
                    }
                  }
                }}/> 
              <input id="disableButton" type="button" value="Cancelar" onClick={this.props.disable}/>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default EditUser; 