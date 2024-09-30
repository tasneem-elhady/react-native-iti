import { Component } from "react";
import {v4 as uuid} from "uuid";
import Form from "./Search";
import Movie from "./results";
class Movies extends Component {
  constructor() {
    super();
    console.log("constructor");
    this.state = {
      movieArr: [],
      filteredarr:[],
      s:false,
      name:"",
      lead:"",
      rate:"",
      Date:"2024",
      MovieName:(name)=>{
        this.state.name=name;
      },
      Leads:(name)=>{
        this.state.lead=name;
      },
      rating:(rate)=>{
        this.state.rate=rate;
      },
      date:(date)=>{
        console.log(date);
        this.state.Date=date;
      },
      search:(s)=>{
        let f = this.state.name.length === 0 ? this.state.movieArr :this.state.movieArr.filter((m)=>m.title.toLocaleLowerCase().includes(this.state.name.toLocaleLowerCase()));
        f = this.state.lead.length === 0 ? f : this.state.movieArr.filter((m)=>m.overview.toLocaleLowerCase().includes(this.state.lead.toLocaleLowerCase()));
        f = f.filter((m) => m.release_date.includes(this.state.Date));
        f = (this.state.rate).length === 0 ? f : f.filter((m)=> Number(m.vote_average) > Number(this.state.rate));
        this.setState({filteredarr : f});
        console.log(this.state);
        this.setState({s:true});
      }
    };
  }

  render() {
    if (!this.state.movieArr.length) {
      // Show loading message if movieArr is empty
      console.log("Loading movies...");
      return <div>loading..........</div>;
    }
    else if(this.state.s){
        console.log(this.state.filteredarr);
        return (
        <div id = "cards-container">
                {this.state.filteredarr.map((m) => (
                <Movie key={uuid()} {...m}></Movie>
                ))}
            </div>       
        );
    }
    return (
          <Form key={uuid()} search={this.state.search} Leads={this.state.Leads} MovieName={this.state.MovieName} date={this.state.date} rating={this.state.rating}></Form>
    );
  }

  componentDidMount() {
    console.log("mounted");
    fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7")
      .then((res) => res.json())
      .then((res) => {
        // Update movieArr with actual data from the API
        this.setState({ movieArr: res.results }); 
        this.setState({filteredarr:res.results});
      });
  }
}

export default Movies;