import { useEffect, useState } from 'react'
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

  useEffect(() => {
    const filter_movies = () => {
      console.log(searchText);
        const filtered = data.filter((movie) =>
          movie.title.toLowerCase().includes(searchText.toLowerCase())
        )
        setFilterMovies(filtered);
        console.log(filtered);
    }
    filter_movies();
  }, [searchText, data]);


  
  return (
    <>
      <h1>Movie List</h1>
      <SearchBar setSearchText={setSearchText} />
      <MovieCards movies={filterMovies} />
    </>
  )
}

export default App
