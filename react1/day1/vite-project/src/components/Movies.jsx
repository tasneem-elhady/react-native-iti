import React, { useState } from 'react';
import Movie from './movie';
import {v4 as uuid} from "uuid"
const Movies = () => {
    const [movieArr]=useState([
        {id:uuid(),name:"The Nun" ,genre:"horror"},
        {id:uuid(),name:"Tenent" ,genre:"Mystery"},
        {id:uuid(),name:"Inside Out" ,genre:"animation"},
    ])
    console.log(movieArr);
    return (
        <div>
            {movieArr.map((m)=><Movie key={uuid()}{...m}></Movie>)}
        </div>
    );
}
export default Movies;