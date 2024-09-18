const MovieCards = ({movies}) => {
    return (
        <div id="movie-card" className="container">
            {movies.map((movie) => (
                <div className="card" key={movie.id}>
                    <img src={movie.poster} className="cardImage" alt={movie.title} />
                    <div className="cardDetails">
                        <h5 className="cardTitle">{movie.title}</h5>
                        <p className="cardText">Rating: {movie.rating}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default MovieCards