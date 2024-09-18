import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SearchBar from './Components/SearchBar'
import MovieCards from './Components/MovieCards'

function App() {
  const [data, setData] = useState([]);
  const [filterMovies, setFilterMovies] = useState([]);
  const [searchText, setSearchText] = useState("");

  const fetchMovies = async () => {
    const response = await fetch("https://freetestapi.com/api/v1/movies");
    if(response.ok){
      const movieData = await response.json();
      //console.log(movieData);
      setData(movieData);
      setFilterMovies(movieData);
    }
  };

  fetchMovies();

  const filter_movies = (input) => {
    setSearchText(input);
    let search = input.toLowerCase();
      const filtered = data.filter(movie = () =>
        movie.title.toLowerCase().includes(search)
      )
      setFilterMovies(filtered);
  }


  
  return (
    <>
      <h1>Movie List</h1>
      <SearchBar searchInput={searchText} filter_movies={filter_movies}/>
      <MovieCards movies={filterMovies} />
    </>
  )
}

export default App
