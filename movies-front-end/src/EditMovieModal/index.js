import React, { Component } from 'react'
import { Form, Button, Label, Segment } from 'semantic-ui-react'

export default class EditMovieModal extends Component {
  constructor(props) {
    super(props)


    this.state = {
      title: props.movieToEdit.title,
      genre: props.movieToEdit.genre,
      release_year: props.movieToEdit.release_year
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.updateMovie(this.state)
  }

  render() {
    return (
    <Segment>
        <h4>Edit new movie:</h4>
        <Form onSubmit={this.handleSubmit}>
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
            placeholder="Enter movie release year"
            onChange={this.handleChange}            
          />
          <Button type="Submit">Update Movie</Button>
        </Form>
      </Segment>
    )
  }
} 

 