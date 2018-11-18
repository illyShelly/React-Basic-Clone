import React, { Component } from 'react';
import './marker.css'

class Marker extends Component {
  render() {

    // extract classes to variable
    // using props relate to app.js component
    let classes = "marker";
    if (this.props.selected) {
      // when clicked - new props in App.js to marker
      // new class added to div -> withou manipulation of dom, just state
      classes += " selected";

    }
    return(
      <div className={classes}>
        {this.props.text} {this.props.currency}
      </div>
      );
  }
}

export default Marker;
