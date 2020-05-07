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
      const moviesResponse = await fetch(url, {
        credentials: 'include'
      })
      const moviesJson = await moviesResponse.json()
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
      const deleteMovieJson = await deleteMovieResponse.json()
      this.setState({
        movies: this.state.movies.filter(movie => movie.id != idOfMovieToDelete)
      })

    } catch (err) {
      console.log("error deleting the movie")
      console.log(err)
    }
  }


  editMovie = (idOfMovieToEdit) => {
    this.setState({
      idOfMovieToEdit: idOfMovieToEdit
    })
  }


  createMovie = async (movieToAdd) => {
    try {
      const url = process.env.REACT_APP_API_URL + "/api/v1/movies/"
      const createMovieResponse = await fetch(url, {
        credentials: 'include',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(movieToAdd)        
      })
      const createMovieJson = await createMovieResponse.json()
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

  updateMovie = async (updatedMovieInfo) => {
    const url = process.env.REACT_APP_API_URL + "/api/v1/movies/" + this.state.idOfMovieToEdit
    try {
    const updateMovieResponse = await fetch(url, {
      method: 'PUT',
      body: JSON.stringify(updatedMovieInfo),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const updateMovieJson = await updateMovieResponse.json()
    if(updateMovieResponse.status == 200){
      const movies = this.state.movies
      const indexOfMovieBeingUpdated = movies.findIndex(movie => movie.id == this.state.idOfMovieToEdit)
      movies[indexOfMovieBeingUpdated] = updateMovieJson.data
      this.setState({
        movies: movies,
        idOfMovieToEdit: -1
      })
    }
    } catch (err) {
      console.log("error updating info")
      console.log(err)
    }
  }

  render() {
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