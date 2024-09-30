const Movie = (props)=>{
    console.log(props);
    return <div style={{width: "650px", height: "455px", padding: "8px", borderRadius: "12px", border: "1px black solid", justifyContent: "flex-start", alignItems: "flex-start", gap: "12px", display: "inline-flex"}}>
    <img style={{alignSelf: "auto", height: "455px", borderRadius: "12px" }} src={`https://image.tmdb.org/t/p/w500/${props.poster_path}`}/>
    <div style={{flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", gap: "8px", display: "inline-flex"}}>
        <div style={{alignSelf: "stretch", height: "80px", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", gap: "4px", display: "inline-block"}}>
        <div style={{alignSelf: "stretch", color: "#1E1D1D", fontSize: "24px", fontFamily: "Inter", fontWeight: "500", wordWrap: "break-word"}}>{props.title}</div>
        <div style={{alignSelf: "stretch", color: "#464444", fontSize: "12px", fontFamily: "Inter", fontWeight: "400", wordWrap:"break-word"}}>{props.release_date}</div>
        </div>
        <div style={{alignSelf: "stretch", color: "#464444", fontSize: "20px", fontFamily: "Inter", fontWeight: "400", wordWrap: "break-word"}}>{props.vote_average}/10</div>
        <div style={{alignSelf: "stretch", flex: "1 1 0", justifyContent: "flex-start", alignItems: "flex-start", gap: "4px", display: "inline-flex", flexDirection:"column"}}>
        <div style={{color: "#464444", fontSize: "20px", fontFamily: "Inter", fontWeight: "400", wordWrap: "break-word"}}>plot: </div>
        <div style={{paddingTop:"2px", flex: "1 1 0", alignSelf: "stretch", color: "#464444", fontSize: "17px", fontFamily: "Inter", fontWeight: "400", wordWrap: "break-word"}}>{props.overview}</div>
        </div>
    </div>
    </div>
}
export default Movie;