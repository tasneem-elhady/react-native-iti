const Movie = (props)=>{
    console.log(props);
    const movie = props.movie[0];
    console.log(movie);
    return <div id="card">
    <img style={{alignSelf: "auto", height: "455px", borderRadius: "12px" }} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}/>
    <div id="card-text-content">
        <div id="title-date">
        <div id="title">{movie.title}</div>
        <div id="date">{movie.release_date}</div>
        </div>
        <div id="rate">{movie.vote_average}/10</div>
        <div id="plot-part">
        <div id="plot">plot: </div>
        <div id="p">{movie.overview}</div>
        </div>
    </div>
    </div>
}
export default Movie;