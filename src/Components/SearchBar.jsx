import React from 'react'
const SearchBar = ({searchInput, filter_movies}) =>{
    return (
        <input name="input" className="search" placeholder="search for movies.." onChange = {filter_movies(searchInput)}/>
    )
}

export default SearchBar;