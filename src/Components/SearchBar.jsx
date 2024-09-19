import React from 'react'
const SearchBar = ({setSearchText, filter_movies}) =>{
    return (
        <input name="input" className="search" placeholder="search for movies.." onChange = {(e) => {
            setSearchText(e.target.value)
        }}/>
    )
}

export default SearchBar;