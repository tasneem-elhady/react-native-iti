import { useEffect, useState } from 'react'
import Home from './screens/Home.jsx';
import AddMovie from './screens/AddMovie.jsx'
import Movie from './components/Movie.jsx';
import About from './screens/About.jsx';
import ContactUs from './screens/ContactUs.jsx';
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom"
import Movies from './components/Movies.jsx';
import axios from "axios"
import {v4 as uuid} from "uuid"
import "./styles/style.css"

function App() {
  const [movieArr,setMovieArr]=useState([]);
  const [movieId,setMovieId]=useState("");
  // const [Add_, setAdd] = useState(false);
  let name_ ="" ;
  let plot_="" ;
  let date_ ="" ;
  let rate_ ="" ;

  const Add=()=>{   
    console.log(movieArr);
    movieArr.push({title:name_,id:uuid(),overview:plot_,vote_average:rate_,release_date:date_});
    console.log(movieArr);
    name_ ="" ;
    plot_="" ;
    date_ ="" ;
    rate_ ="" ;
  }
  const MovieName=(name)=>{
    console.log(name_);
    name_=name;
  }
  const Plot=(plot)=>{
    console.log(plot);
    plot_ = plot;
  }
  const Rating=(rate)=>{
    console.log(rate);
    rate_=rate;
  }
  const Date=(date)=>{
    console.log(date);
    date_=date;
  }
  // <Form key={uuid()} Add={AddMovie} plot={Plot} movieName={MovieName} date={Date} rating={Rating}></Form>


  useEffect(()=>{
    console.log("mounted app");
    axios("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7")
      .then((res) => {
        // Update movieArr with actual data from the API
        setMovieArr(res.data.results); 
        console.log(movieArr);
      });
  },[]);

  const getMovieId = (id)=>{
    setMovieId(id);
    console.log(id);
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "/",
          element: !movieArr.length?
          (<div>loading..........</div>):(<Movies getMovieId={getMovieId} movieArr={movieArr}/>)
        },
        {
          path:"/movies/add" ,
          element:<AddMovie Add={Add} plot={Plot} movieName={MovieName} date={Date} rating={Rating}> </AddMovie>
        },
        {
          path:"/movies/:id" ,
          element:<Movie movie = {movieArr.filter((m)=>{return m.id === movieId})}></Movie>
        },
        {
          path:"/about" ,
          element:<About></About>
        },
        {
          path:"/contactUs" ,
          element:<ContactUs></ContactUs>
        },
      ]
    } ,
    
  ])

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
