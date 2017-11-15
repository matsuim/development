import React, { Component } from 'react';
import Entry from './Entry';

class List extends Component {
  renderList() {
    // Pass pieces of data into Entry component.
    const items = this.props.items.map(item => {
      return <Entry key = {item.name} name={item.name} type={item.type} size={item.size} age ={item.age} img={item.img}/>
    });
    return items;
  }

  // convert list to HTML object
  render() {
    return (
      <ul>
        {this.renderList()}
      </ul>
    );
  }
}

export default List;
