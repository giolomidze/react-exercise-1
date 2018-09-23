import React, { Component } from 'react';

export class Movie extends Component {
  render() {
    return (
     <span className="movie">
      {this.props.movie.name}
     </span>
    );
  }
}