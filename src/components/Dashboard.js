import React from 'react';
import Header from './Dashboard/Header'; 
import Navbar from './Dashboard/Navbar'; 
import Tree from './Dashboard/Tree'; 
import AddUser from './Dashboard/AddUser'; 
import EditUser from './Dashboard/EditUser'; 

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addUser: false, 
      editUser: false, 
      profileData: {
        userScore: 8, 
        userId: '0003454',
        userName: 'Citlalli Sarahí', 
        userLeader: 'Jorge Parra',
        userEmail: 'info@robertolegorreta.com',
        userPhone: '3112595467',
        userAddress: 'Lago Zurich 243 Ampliación Granada CDMX', 
        userBankNumber: '4152313520290326',
        userBankInstitution: 'BBVA'
      }
    };

    this.addUser = this.addUser.bind(this); 
    this.editUser = this.editUser.bind(this); 
    this.modifyUserData = this.modifyUserData.bind(this); 
  }

  addUser(e){
    if(!this.state.addUser || e.target === document.getElementById('addUser'))

    this.setState({
      addUser: !this.state.addUser
    }); 
  }

  editUser(e){
    if(!this.state.editUser || e.target === document.getElementById('editUser') || e.target === document.getElementById('disableButton'))

    this.setState({
      editUser: !this.state.editUser
    }); 
  }

  modifyUserData(event, input){
    this.setState({
      editUser: !this.state.editUser,
      profileData: Object.assign(this.state.profileData, input)
    });     

    event.preventDefault();
  }

  render(){
    return (
      <div id="dashboard">
        <Header signOut={this.props.signOut}></Header>
        <div style={{display: "flex", flexDirection: "row", flexGrow: 1}}>
          <Navbar editUser={this.editUser} profileData={this.state.profileData}></Navbar>
          <Tree addUser={this.addUser}></Tree>
        </div>
        {this.state.addUser && <AddUser addUser={this.addUser}></AddUser>}
        {this.state.editUser && <EditUser modifyUserData={this.modifyUserData} disable={this.editUser} profileData={this.state.profileData}></EditUser>}
      </div>
    ); 
  }
}

export default Dashboard; 