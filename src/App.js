import movieArray from './data/movies.json'
import './styles/App.css'
import React from 'react'
import Movie from './components/Movie'
import Genre from './components/Genre'

const App = () => {
  return (
    <div className="App">
      <h1>Movie List</h1>
      {
        movieArray.map((movies) => (
          <Movie 
          key={movies.name}
          title={movies.title}
          image={movies.poster_path}
          description={movies.overview}
          ge={movies.genres}

          />


        ))
      }
    </div>
  )
};

export default App;