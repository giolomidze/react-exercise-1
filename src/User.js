import React, { Component } from 'react';

export class User extends Component {
  render() {
    return (
     <span className="user">
      {this.props.user.name}
     </span>
    );
  }
}