import React, { Component } from 'react'
import { Form, Button, Label, Segment } from 'semantic-ui-react'

export default class NewMovieForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      genre: '',
      release_year: ''
    }
  }

  render() {
    return (
      <Segment>
        <h4>Add new movie:</h4>
        <Form>
          <Label>Name:</Label>
          <Form.Input 
            type="text"
            name="title"
            value={this.state.title}
            placeholder="Enter a title"          
          />
          <Label>Name:</Label>
          <Form.Input 
            type="text"
            name="genre"
            value={this.state.genre}  
            placeholder="Enter a genre"          
          />
          <Label>Name:</Label>
          <Form.Input 
            type="text"
            name="release_year"
            value={this.state.release_year}         
            placeholder="Enter movie release_year"          
          />
          <Button type="Submit">Add New Movie</Button>
        </Form>
      </Segment>
    )

  }

} 