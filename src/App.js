import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

var zipcodes = [
  {name: "Houston", zipcode: 77098},
  {name: "Katy", zipcode: 77494},
  {name: "Tomball", zipcode: 77070},
  {name: "San Marcos", zipcode: 78666}
];

class App extends Component {
  constructor() {
    super()
    this.state = {
      currentZip : 0
    }
  }
  changeZip(zip) {
    this.setState({currentZip: zip})
  }
  render() {
    return (
      <div className="App">
        <h2>{zipcodes[this.state.currentZip].name} @ {zipcodes[this.state.currentZip].zipcode}</h2>
        {zipcodes.map((zip, index) => {
          return (
              <button onClick={() => this.changeZip(index)}>{zip.name}</button>
          )
        })}
      </div>
    );
  }
}

export default App;
