import React from 'react'
import { Card, Button } from 'semantic-ui-react'

export default function MovieList(props) {

  const movies = props.movies.map(movie => {
    return(

      <Card key={movie.id} color={"teal"}>
        <Card.Content>        
          <Card.Header>
            {movie.title}
          </Card.Header>
          <Card.Meta>
            {movie.genre}
          </Card.Meta>
           <Card.Meta>
            {movie.release_year}
          </Card.Meta>
          <Card.Description>
            {movie.title} is a {movie.genre} movie that was released in {movie.release_year}
          </Card.Description>
        </Card.Content>
      <Card.Content textAlign={"center"}> 
        <Button 
          basic 
          color='red'
          onClick={ () => props.deleteMovie(movie.id) }
        >
          Delete {movie.title}
        </Button>
        <Button 
          basic 
          color='green'
          onClick={ () => props.editMovie(movie.id) }
        >
          Edit {movie.title}
        </Button>
      </Card.Content>
      </Card>
    )
  })

  return (
    <Card.Group>
      {movies}
    </Card.Group>
  )
} 