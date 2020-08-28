import React from 'react';
import logo from './logo.svg';
import './App.css';

import Form from './Form'

class App extends React.Component {

  state = { user: null }

  logInUser = (user) => {
    localStorage.setItem('userId', user.id)
    this.setState({user: user})
  }

  componentDidMount(){
    let id = localStorage.getItem('userId')
    if(id){
      fetch("http://localhost:3000/toys/" + id)
        .then(res => res.json())
        .then(this.logInUser)
    }
  }

  render(){
    return (
      <div className="App">
        <h1>Login Toy App!</h1>
        {this.state.user ?
            <div>
              <h2>Hi, {this.state.user.name}</h2>
              <img src={this.state.user.image} />
            </div> :
        <Form logInUser={this.logInUser}/> }
      </div>
    )
  }
}

export default App;
