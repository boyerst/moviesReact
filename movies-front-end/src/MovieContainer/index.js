import React, { Component } from 'react'
import MovieList from '../MovieList'
import NewMovieForm from '../NewMovieForm'
import EditMovieModal from '../EditMovieModal'

export default class MovieContainer extends Component {
  constructor(props) {

    super(props)

    this.state = {
      movies: [],
      idOfMovieToEdit: -1
    }
  }


  componentDidMount() {
    this.getMovies()
  }

  getMovies = async () => {
    try {
      const url = process.env.REACT_APP_API_URL + "/api/v1/movies/"
      console.log("about to fetch data from:");
      console.log(url);
      const moviesResponse = await fetch(url)
      console.log("here is the Response from the fetch call:");
      console.log(moviesResponse);
      const moviesJson = await moviesResponse.json()
      console.log("here is the data we got in getMovies in MovieContainer:");
      console.log(moviesJson);

      this.setState({
        movies: moviesJson
      })
    } catch(err) {
      console.log("Error getting movie data", err)
    }
  }

   deleteMovie = async (idOfMovieToDelete) => {
    const url = process.env.REACT_APP_API_URL + "/api/v1/movies/" + idOfMovieToDelete
    try {
    
      const deleteMovieResponse = await fetch(url, {
        method: 'DELETE'
      })
      console.log("deleteMovieResponse", deleteMovieResponse)
      const deleteMovieJson = await deleteMovieResponse.json()
      console.log("deleteMovieJson", deleteMovieJson)
      this.setState({
        movies: this.state.movies.filter(movie => movie.id != idOfMovieToDelete)
      })

    } catch (err) {
      console.log("error deleting the movie")
      console.log(err)
    }
  }


  editMovie = (idOfMovieToEdit) => {
    console.log("you are trying to edit movie with id: ", idOfMovieToEdit)
    this.setState({
      idOfMovieToEdit: idOfMovieToEdit
    })
  }


  createMovie = async (movieToAdd) => {
    console.log("here is the movie you are trying to add");
    console.log(movieToAdd);
    try {
      const url = process.env.REACT_APP_API_URL + "/api/v1/movies/"
      const createMovieResponse = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(movieToAdd)        
      })
      console.log("createMovieResponse", createMovieResponse);
      const createMovieJson = await createMovieResponse.json()
      console.log("here is what we got back after trying to add a movie:");
      console.log(createMovieJson);

      if(createMovieResponse.status === 201) {
        const movies = this.state.movies
        movies.push(createMovieJson.data)
        this.setState( {movies: movies} )
      }

    } catch(err) {
      console.error("Error adding movie")
      console.error(err)
    }

  }

  

  render() {
    console.log("here is this.state in render() in MovieContainer")
    console.log(this.state)
    return(
      <React.Fragment>
        <h2>Movies</h2>
        <NewMovieForm createMovie={this.createMovie}/>
        <MovieList
          movies={this.state.movies} 
          deleteMovie={this.deleteMovie}
          editMovie={this.editMovie}
        />
        { 
          this.state.idOfMovieToEdit !== -1 
          && 
          <EditMovieModal 
            movieToEdit={this.state.movies.find((movie) => movie.id === this.state.idOfMovieToEdit)}
            updateMovie={this.updateMovie}
          /> 
        }
      </React.Fragment>
    )
  }

}