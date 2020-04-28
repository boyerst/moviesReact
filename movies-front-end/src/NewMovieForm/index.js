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

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })

  }


  render() {
    console.log("this.state in render() in NewMovieForm");
    console.log(this.state);
    return (
      <Segment>
        <h4>Add new movie:</h4>
        <Form>
          <Label>Title:</Label>
          <Form.Input 
            type="text"
            name="title"
            value={this.state.title}
            placeholder="Enter a title"
            onChange={this.handleChange}            
          />
          <Label>Genre:</Label>
          <Form.Input 
            type="text"
            name="genre"
            value={this.state.genre}  
            placeholder="Enter a genre"
            onChange={this.handleChange}            
          />
          <Label>Release Year:</Label>
          <Form.Input 
            type="text"
            name="release_year"
            value={this.state.release_year}         
            placeholder="Enter movie release_year"
            onChange={this.handleChange}            
          />
          <Button type="Submit">Add New Movie</Button>
        </Form>
      </Segment>
    )

  }

} 