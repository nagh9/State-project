import React, { Component } from "react";
export default class Person extends Component {
  state = {
    fullName: "Angham Ben Amara",
    bio: "Now I'm  studying web developer skills",
    profession: " Web developper",
    
  };
  render() {
    return (
      <div
        style={{
          backgroundColor: "ButtonFace",
          border: "outset 4px linen",
          width: "400px",
          margin: "17px auto ",
        }} > 
        
       

        <h1> {this.state.fullName}</h1>
        <h2>{this.state.profession}</h2>
        <h4>{this.state.bio}</h4>

      </div>
     
    
    );
  } 
}