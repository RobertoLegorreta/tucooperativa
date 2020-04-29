import React from 'react';
import Dashboard from './Dashboard'; 
import Login from './Login'; 

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: true
    };

    this.signOut = this.signOut.bind(this); 
  }

  signOut(){
    this.setState({
      loggedIn: !this.state.loggedIn
    }); 
  }

  render() {
    return (<div>
      {this.state.loggedIn? <Dashboard signOut={this.signOut}></Dashboard> : <Login></Login>}
    </div>);
  }
}

export default App;
