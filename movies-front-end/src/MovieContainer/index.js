import React, { Component } from 'react'
import MovieList from '../MovieList'
import NewMovieForm from '../NewMovieForm'

export default class MovieContainer extends Component {
  constructor(props) {

    super(props)

    this.state = {
      movies: []
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
      console.log("here is the data we got in getDogs in MovieContainer:");
      console.log(moviesJson);

      this.setState({
        movies: moviesJson
      })
    } catch(err) {
      console.log("Error getting movie data", err)
    }
  }

  render() {
    console.log("here is this.state in render() in MovieContainer")
    console.log(this.state)
    return(
      <React.Fragment>
        <h2>Movies</h2>
        <NewMovieForm />
        <MovieList movies={this.state.movies} />
      </React.Fragment>
    )
  }

}