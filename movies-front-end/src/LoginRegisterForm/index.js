import React, { Component } from 'react'
import { Form, Button, Label } from 'semantic-ui-react'

export default class LoginRegisterForm extends Component {

  constructor() {
    super()

    this.state = {
      email: '',
      password: '',
      username: ''
    }
  }

  render() {
    return (
      <React.Fragment>
        <Form>
          <Label>Username:</Label>
          <Form.Input 
            type="text"
            name="username"
            placeholder="Enter a username"
            value={this.state.username}
          />
          <Label>Email:</Label>
          <Form.Input 
            type="email"
            name="email"
            placeholder="Enter a email"
            value={this.state.email}
          />
          <Label>Password:</Label>
          <Form.Input 
            type="password"
            name="password"
            placeholder="Enter a password"
            value={this.state.username}
          />
          <Button type="Submit">Log In</Button>
        </Form>
      </React.Fragment>      
    )
  }
} 