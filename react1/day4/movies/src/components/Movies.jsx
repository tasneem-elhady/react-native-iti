import { Component } from "react";
import Movie from "./Movie";
import MovieView from './MovieView'
import {v4 as uuid} from "uuid"
class Movies extends Component {
  constructor(props) {
    super();
    console.log("constructor");
    this.state = {
      movieArr: props.movieArr,
    };
  }

  render() {
    console.log(this.state.movieArr);
    if (!this.state.movieArr.length) {
      // Show loading message if movieArr is empty
      console.log("Loading movies...");
      return <div>loading..........</div>;
    }
    return (
      <div id = "cards-container">
        {this.state.movieArr.map((m) => (
          <MovieView getMovieId={this.props.getMovieId} key={uuid()} {...m}></MovieView>
        ))}
      </div>
    );
  }

  // componentDidMount() {
  //   console.log("mounted");
  //   fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7")
  //     .then((res) => res.json())
  //     .then((res) => {
  //       // Update movieArr with actual data from the API
  //       this.setState({ movieArr: res.results }); 
  //     });
  // }
}

export default Movies;