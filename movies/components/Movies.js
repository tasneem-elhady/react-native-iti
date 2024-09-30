import React from 'react';
import { StyleSheet, View, FlatList} from 'react-native';
import MovieCard from './MovieCard';
import { MoviesContext } from '../contexts/MoviesContextProvider';

const Movies = () => {
    const {movies,search} = useContext(MoviesContext);
    let filteredArr = movies;
    if(search.length>0)
        {
            console.log(search);
            filteredArr = users.filter((u)=>u.name.includes(search))}
        console.log("in users: "+filteredArr);
    return (
        <FlatList 
        data={filteredArr} 
        ListHeaderComponent={<Search></Search>}
        renderItem={({movie})=>{<MovieCard movie = {movie.data} ></MovieCard>}}
        >
        </FlatList>
    );
}

const styles = StyleSheet.create({})

export default Movies;