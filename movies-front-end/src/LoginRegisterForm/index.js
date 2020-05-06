import React, { Component } from 'react'
import { Form, Button, Label, Message } from 'semantic-ui-react'


export default class LoginRegisterForm extends Component {

  constructor() {
    super()

    this.state = {
      email: '',
      password: '',
      username: '',
      action: 'Login'
    }
  }

  changeForm = () => {
    if(this.state.action==="Login"){
      this.setState({action: "Register"})
    } else {
      this.setState({action: "Login"})
    }
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(`You are trying to ${this.state.action.toLowerCase()} with the following credentials`)
    console.log(this.state);

  }

  render() {
    return (
      <React.Fragment>
          <Form onSubmit={this.handleSubmit}>
            {this.state.action==="Register"
            &&
              <Form.Input
                name="username"
                type="text"
                placeholder="Username"
                value={this.state.username}
                onChange={this.handleChange}
              />
            }
          <Label>Email:</Label>
          <Form.Input 
            type="email"
            name="email"
            placeholder="Enter a email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <Label>Password:</Label>
          <Form.Input 
            type="password"
            name="password"
            placeholder="Enter a password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <Button type="Submit">Log In</Button>
        </Form>
        <Message>
        {
          this.state.action==="Login"
          ?
          <Message>
          Need an account? <span className="link" onClick={this.changeForm}>Register</span>
          </Message> 
          :
          <Message>
          Already registered? <span className="link" onClick={this.changeForm}>Log In</span>
          </Message>
        }
        </Message>
      </React.Fragment>      
    )
  }
} 