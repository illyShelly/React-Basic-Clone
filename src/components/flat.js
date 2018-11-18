import React, { Component } from 'react';
import './flat.css';

// take temporaly from App.js

// const flat = {
//   name: 'By the Eiffel Tower',
//   price: 100,
//   priceCurrency: "$"
// };
// <Flat flat={flat} />
// somewhere have info about flat in  the parent element,
// passing to the components this way: <Flat flat={flat} />
// better than to pass all props separatelly, good for API

class Flat extends Component {
  // use this or underneath onClick={() => {this.props.handleClick()}}> // and changing name to selectFlat even in App.js line 50 as props
  handleClick = () => {
    // call the parent method selectFlat
    // app is giving function to child flat, and calls parent method when click Event happens
    // - because flat is separated from external world
    this.props.selectFlat(this.props.flat);
  }

  render() {

    const title = this.props.flat.price + " " + this.props.flat.priceCurrency + " - " + this.props.flat.name;

    const style = {
      // template literals ES6
      backgroundImage: `url('${this.props.flat.imageUrl}')`
    };

    return(
      <div className="flat" onClick={this.handleClick}>
        <div className="flat-picture" style={style}></div>
        <div className="flat-title">{title}</div>
      </div>
    );
  }
}

export default Flat;

// we need to put some props from external world

// import React from 'react';
// ...
// class Hello extends React.Component
