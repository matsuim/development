import React, { Component } from 'react';

// Organize information into HTML objects for List
class Entry extends Component {
  render() {
    return (
      <div className="list-entry">
        <img src={this.props.img} alt = "icon"/>
        <h2>{this.props.name}</h2>
        <p>
          {this.props.size} {this.props.type} <br/>
          Age: {this.props.age}
        </p>
      </div>
    )
  }
}

export default Entry;
