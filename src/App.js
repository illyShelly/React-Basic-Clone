import React, { Component } from 'react';
import './App.css';
import Flat from './components/flat';
// need import Flat component
// and put here the variable flat => not to flat.js!!

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flats: []
    };
  }

  componentDidMount() {
    // console.log("working");
    const url = "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json";
    fetch(url) //Ajax
      .then(response => response.json())
      .then((data) => {
        // console.log(data); // array of objects
      this.setState({
        flats: data
      });
      })
  }
  render() {

  //   const flat = {
  //   "id": 145,
  //   "name": "Charm at the Steps of the Sacre Coeur/Montmartre",
  //   "imageUrl": "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat1.jpg",
  //   "price": 164,
  //   "priceCurrency": "EUR",
  //   "lat": 48.884211,
  //   "lng": 2.346890
  // };

  // const flats = [flat, flat]

    return (
      <div className="app">
        <div className="main">
          <div className="search"></div>
          <div className="flats">
            {this.state.flats.map((flat) =>
              <Flat flat={flat} />
          )}
          </div>
        </div>
        <div className="map">
        </div>
      </div>
    );
  }
}

export default App;

// list of flats it change, flat itselves not
// array of flats => we will fetch - and loop it through map
