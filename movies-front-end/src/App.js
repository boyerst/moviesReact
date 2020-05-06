import React, { Component } from 'react';
import './App.css';
import MovieContainer from './MovieContainer'

export default class App extends Component {
  // console.log(process.env)
  constructor(){
    super()

    this.state = {
      logginIn: false, 
      loggedInUserEmail: ""
    }
  }
  
  register = async (registerInfo) => { 
    console.log("register() in App.js called with the following info", registerInfo)
    const url = process.env.REACT_APP_API_URL + "/api/v1/users/register"
    try {
      const registerResponse = await fetch(url, {
        credentials: 'include', 
        method: 'POST',
        body: JSON.stringify(registerInfo),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      console.log("registerResponse", registerResponse)
      const registerJson = await registerResponse.json()
      console.log("registerJson", registerJson)

      if(registerResponse.status === 201) {
        this.setState({
          loggedIn: true, 
          loggedInUserEmail: registerJson.data.email
        })
      }

    } catch(err) {
      console.log("Error trying to register with API")
      console.log(err)
    } 

  }







   render() {
    return (
      <div className="App">
        {
          this.state.loggedIn
          ?
          <MovieContainer />
          :
          "Not logged in"
        }
      </div>
    );    
  }
}