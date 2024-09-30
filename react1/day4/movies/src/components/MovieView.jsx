import { Link } from 'react-router-dom';
const Movie = (props)=>{
    // console.log(props.id);
    return <Link to={ `/movies/${props.id}`} >
                <div onClick={()=>props.getMovieId(props.id)} id="view-card" style={{ width:"305px", flexDirection:"column"}}>
                    <img style={{alignSelf: "auto", height: "455px", borderRadius: "12px" }} src={`https://image.tmdb.org/t/p/w500/${props.poster_path}`}/>
                    <div id="title">{props.title}</div>
                </div>
            </Link>
}
export default Movie;