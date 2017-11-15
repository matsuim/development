import React, { Component } from 'react';
import { DropdownButton, MenuItem, ButtonToolbar, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import List from './List';

class FilteredList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "", // For search terms
      type: "", // For type filtering
      size: "", // For size filtering
      sorting: "asc" // For age sorting direction
    };
  }

  // Sets the search state whenever the user types on the search bar
  onSearch = (event) => {
    this.setState({search: event.target.value.trim().toLowerCase()});
  }

  filterItem = (item) => {
    // Checks if the current search term and filters are contained in this item
    if(this.state.type === "" && this.state.size === ""){
      return item.name.toLowerCase().search(this.state.search) !== -1;
    } else if(this.state.type === "" && this.state.size !== "") {
      return item.name.toLowerCase().search(this.state.search) !== -1 && item.size === this.state.size;
    } else if(this.state.type !== "" && this.state.size === "") {
      return item.name.toLowerCase().search(this.state.search) !== -1 && item.type === this.state.type;
    } else {
      return item.name.toLowerCase().search(this.state.search) !== -1 & item.type === this.state.type & item.size === this.state.size;
    }

  }

  // Sets the type state when the user selects a type to filter by
  handleTypeSelect = (selected) => {
    this.setState({type: selected});
  }

  // Sets the size state when the user selects a size to filter by
  handleSizeSelect = (selected) => {
    this.setState({size: selected});
  }

  // Sets the sorting state when the user selects a direction to sort by
  handleSort = (selected) => {
    this.setState({sorting: selected});
  }

  // Sorts data in ascending or descending order by age and returns sorted data
  sortIt = (list) => {
     if(this.state.sorting === "asc") {
        var sorted = list.sort(function (a, b) {
          return a.age - b.age;
        })
    } else if(this.state.sorting === "desc") {
        sorted = list.sort(function(a, b) {
          return b.age - a.age;
        })
    }  else {
      sorted = this.props.items;
    }
    return sorted;
  }

  render() {
    return (
      <div className="controls_list">
        <div className="app-head">
          <h1>Dog Finder</h1>
        </div>

        <div className="controls">

          {
          // render filter controls
          }
          <div className="control-left">

            <h3>Filter by:</h3>

            {
            // render type filter controls
            }
            <div className="individual_control">
              <DropdownButton id="typeDropdown" title={"Type"} bsSize="small" onSelect={this.handleTypeSelect}>
                <MenuItem eventKey="">All</MenuItem>
                <MenuItem eventKey="Bernese Mountain Dog">Bernese Mountain Dog</MenuItem>
                <MenuItem eventKey="Chesapeake Bay Retriever">Chesapeake Bay Retriever</MenuItem>
                <MenuItem eventKey="Chinook">Chinook</MenuItem>
                <MenuItem eventKey="Corgi">Corgi</MenuItem>
                <MenuItem eventKey="Golden Doodle">Golden Doodle</MenuItem>
                <MenuItem eventKey="Golden Retriever">Golden Retriever</MenuItem>
                <MenuItem eventKey="German Shepherd">German Shepherd</MenuItem>
                <MenuItem eventKey="Norfolk Terrier">Norfolk Terrier</MenuItem>
                <MenuItem eventKey="Shiba Inu">Shiba Inu</MenuItem>
                <MenuItem eventKey="Portugese Water Dog">Portugese Water Dog</MenuItem>
              </DropdownButton>
            </div>

            {
            // render size filter controls
            }
            <div className="individual_control">
              <DropdownButton id="sizeDropdown" title={"Size"} bsSize="small" onSelect={this.handleSizeSelect}>
                <MenuItem eventKey="">All</MenuItem>
                <MenuItem eventKey="Small">Small</MenuItem>
                <MenuItem eventKey="Medium">Medium</MenuItem>
                <MenuItem eventKey="Large">Large</MenuItem>
              </DropdownButton>
            </div>

          </div>

          {
          // render search bar
          }
          <div className="control-center">
            <div className="individual_control">
              <input type="text" placeholder=" Search" className="textbox" onChange={this.onSearch} />
            </div>
          </div>

          {
          // render sorting controls
          }
          <div className="control-right">
            <h3>Sort by age:</h3>
            <div className="individual_control">
              <ButtonToolbar>
                <ToggleButtonGroup type="radio" name="sort" title={"Sort by age"} bsSize="small" defaultValue={"asc"} onChange={this.handleSort}>
                  <ToggleButton value={"asc"}>Ascending</ToggleButton>
                  <ToggleButton value={"desc"}>Descending</ToggleButton>
                </ToggleButtonGroup>
              </ButtonToolbar>
            </div>
          </div>

        </div>
        {/*
        This takes the data, sorts it, and then filters it by the filters
        and search term, and then passes the processed data into the List
        component.
        */}
        <div className="filter-list">
          <List items={this.sortIt(this.props.items).filter(this.filterItem)} />
        </div>

      </div>
    );
  }
}

export default FilteredList;
