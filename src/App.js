
import './App.css';
import React, { Component } from "react";
import Person from "./components/profile";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

export default class App extends Component {
   state={
      show: true,
      count: 0,
    };
  

  componentDidMount() {
    setInterval(() => this.setState({ count: this.state.count + 1 }), 1000);
  }
  reset() {
    if (this.state.show) {
      this.setState({ count: 0 });
    }
  }
  render() {
    return (
      <div className="App">
<Button variant="outline-info"
          className="button-53"
          onClick={() => {
            this.setState({ show: !this.state.show });
            this.reset();
          }}
        >
          Click to Hide profile
          </Button>        
        {this.state.show ? 
        (<Person />) : (
          <h2 style={{ width: "50px",height: "33px", margin: "20px auto",}} >
            {this.state.count}
          </h2>
        )}
      </div>
    );
  }
}




