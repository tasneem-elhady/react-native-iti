import "../styles/style.css"
const Movie = (props)=>{
    console.log(props);
    return <div id="card">
    <img style={{alignSelf: "auto", height: "455px", borderRadius: "12px" }} src={`https://image.tmdb.org/t/p/w500/${props.poster_path}`}/>
    <div id="card-text-content">
        <div id="title-date">
        <div id="title">{props.title}</div>
        <div id="date">{props.release_date}</div>
        </div>
        <div id="rate">{props.vote_average}/10</div>
        <div id="plot-part">
        <div id="plot">plot: </div>
        <div id="p">{props.overview}</div>
        </div>
    </div>
    </div>
}
export default Movie;