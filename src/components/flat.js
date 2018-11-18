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
  render() {

    const title = this.props.flat.price + this.props.flat.priceCurrency + " - " + this.props.flat.name;

    const style = {
      // template literals ES6
      backgroundImage: `url('${this.props.flat.imageUrl}')`
    };

    return(
      <div className="flat">
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
