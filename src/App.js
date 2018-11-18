import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import './App.css';
import Flat from './components/flat';
import Marker from './components/marker'
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
        flats: data,
        selectedFlat: null
      });
      })
  }

  selectFlat = (flat) => {
    console.log(flat); // works when click on flat
    // we re-render map - we change state then
    // extends state to selectedFlat starting with null
    // when clicked change lat, lng from const variable
    this.setState({
      selectedFlat: flat
    })
  }

  render() {

  // passing desired city lat, lng
  // when click on flat selectFlat method change state
  // rerender const -> let, if/else statement
  let center = {
    lat: 48.8566,
    lng: 2.3522
  }
  // when click on flat maps re-render and move to marker
  if (this.state.selectedFlat) {
    center = {
      lat: this.state.selectedFlat.lat,
      lng: this.state.selectedFlat.lng
    }
  }
    return (
      <div className="app">
        <div className="main">
          <div className="search"></div>
          <div className="flats">
            {this.state.flats.map((flat) =>
              <Flat
              flat={flat}
              key={flat.name}
              selectFlat={this.selectFlat}
              />
          )}
          </div>
        </div>
        <div className="map">
           <GoogleMapReact
          // bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
          center={center}
          zoom={15}
        >
          {this.state.flats.map((flat) =>
            <Marker
            lat={flat.lat}
            lng={flat.lng}
            text={flat.price}
            currency={flat.priceCurrency}
            key={flat.name}
            selected={flat === this.state.selectedFlat}
            />
            )}
        </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;

// list of flats it change, flat itselves not
// array of flats => we will fetch - and loop it through map
