const Movie = (props)=>{
    console.log(props);
    const {id,name,genre} = props;
    return <div style={{backgroundColor:"violet" ,margin :"20px", textAlign:"center"}}>
                <div>Id : {id}</div>
                <div>Name : {name}</div>
                <div>Genre : {genre}</div>
            </div>
}
export default Movie; 