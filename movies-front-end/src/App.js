import React from 'react';
import './App.css';
import MovieContainer from './MovieContainer'

function App() {
  console.log(process.env)
  return (
    <div className="App">
      <MovieContainer />
    </div>
  );
}

export default App;
