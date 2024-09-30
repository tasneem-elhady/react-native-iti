import { Component } from "react";

class Footer extends Component{
    constructor (props){
        super(props);
        this.state={
                name:"React" ,
            }
    }
    render (){
        console.log("hi");
        return <div style={{backgroundColor:"blue" ,margin :"20px", textAlign:"center"}}>Task of {this.state.name}, by {this.props.signature}</div>;
    }
}
export default Footer;