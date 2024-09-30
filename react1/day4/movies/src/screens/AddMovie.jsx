import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import {Button} from '@mui/material';
import { Link } from 'react-router-dom';

const AddMovie = (props)=>{
    const handleChange = (e)=>{
        setReleaseYear(e.target.value);
        props.date(e.target.value);
    }
    return<div style={{width: '100%', height: '100%', padding: 16, justifyContent: 'flex-end', gap: 10, display: 'inline-flex'}}>
    <div style={{alignItems:"flex-start", width: '96%', padding: 10, gap: 36, display: 'inline-flex', flexDirection: "column"}}>
      <TextField fullWidth id="standard-basic" label="Movie Name" variant="standard"  
      onChange={(event)=>{
        props.movieName(event.target.value)
    }}/>
      <TextField fullWidth id="standard-basic" label="Plot" variant="standard"  
      onChange={(event)=>{
        props.plot(event.target.value)
    }}/>
      <TextField fullWidth id="standard-basic" label="Rating" variant="standard"  
      onChange={(event)=>{
        props.rating(event.target.value)
    }}/>
    <TextField fullWidth id="standard-basic" label="Release Date" variant="standard"  
      onChange={(event)=>{
        props.date(event.target.value)
    }}/>
    <Link to='/'>
        <Button size="large" variant="contained" 
        onClick={()=>{props.Add();}}>
            Add
        </Button>
    </Link>
    </div>
  </div>
}
export default AddMovie;