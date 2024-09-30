
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import {Button} from '@mui/material';
import { Select } from '@mui/material';
import {InputLabel} from '@mui/material';
import {MenuItem} from '@mui/material';
const Form = (props)=>{
    const [ReleaseYear, setReleaseYear] = useState(2024);

    const handleChange = (e)=>{
        setReleaseYear(e.target.value);
        props.date(e.target.value);
    }
    return<div style={{width: '100%', height: '100%', padding: 16, backgroundImage: 'url(https://hips.hearstapps.com/hmg-prod/images/best-spring-movies-1677000068.jpg?resize=1200:*)', justifyContent: 'flex-end', gap: 10, display: 'inline-flex'}}>
  <div style={{width: 600, height: 600, paddingLeft: 16, paddingRight: 16, paddingTop: 16, paddingBottom: 16, background: 'rgba(255, 255, 255, 0.95)', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
    <div style={{alignItems:"flex-start", width: '96%', padding: 10, gap: 36, display: 'inline-flex', flexDirection: "column"}}>
      <div style={{color: 'black', fontSize: 32, fontFamily: 'Inter', fontWeight: 500, wordWrap: 'break-word'}}>Your cinematic search engine.</div>
      <TextField fullWidth id="standard-basic" label="Movie Name" variant="standard"  
      onChange={(event)=>{
        props.MovieName(event.target.value)
    }}/>
      <TextField fullWidth id="standard-basic" label="Leads Names" variant="standard"  
      onChange={(event)=>{
        props.Leads(event.target.value)
    }}/>
      <TextField fullWidth id="standard-basic" label="Rating" variant="standard"  
      onChange={(event)=>{
        props.rating(event.target.value)
    }}/>
      <InputLabel id="demo-simple-select-label">Release year</InputLabel>
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={ReleaseYear}
            label="Release year"
            onChange={handleChange}
        >
            <MenuItem value={2024}>2024</MenuItem>
            <MenuItem value={2023}>2023</MenuItem>
            <MenuItem value={2022}>2022</MenuItem>
        </Select>
        <Button size="large" variant="contained" 
        onClick={()=>{props.search(true);}}
            >Search</Button>
    </div>
  </div>
</div>
}
export default Form;