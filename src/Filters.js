import React, { Component } from 'react';

class Filters extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const value = e.target[e.target.type === "checkbox" ? "checked" : "value"]
    const name = e.target.name;

    this.props.onFilter({
      [name]: value
    });
  }

  render() {
    return (
      <form>
        <input 
          type="text" 
          placeholder="Recherchez un Hero du Dev..." 
          name="filterText"
          value={this.props.filterText}
          onChange={this.handleChange}
        />
        <p>
          <input 
            type="checkbox" 
            checked={this.props.availableOnly}
            name="availableOnly"
            onChange={this.handleChange}
        />

          &nbsp;Domaine(s) populaire
        </p>
      </form>
    );
  }
}

export default Filters;