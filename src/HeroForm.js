import React, { Component } from 'react';
import './HeroForm.css'

const RESET_VALUES = {id: '', pseudo: '', maitrise: '', description: '', tendance:false};

class HeroForm extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.state = {
      hero: Object.assign({}, RESET_VALUES),
      errors: {}
    };
  }
  handleChange(e) {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState((prevState) => {
      prevState.hero[name] = value;
      return { hero: prevState.hero };
    });
  }
  handleSave(e) {
    this.props.onSave(this.state.hero);
    this.setState({
      hero: Object.assign({}, RESET_VALUES),
      errors: {}
    });
  e.preventDefault();
  }
  render() {
    return (
      <form>
        <h3>Enter a new Domaine</h3>
        <p>
          <label>
            Domaine
            <br />
            <input type="text" name="pseudo" onChange={this.handleChange} value={this.state.hero.pseudo}/>
          </label>
        </p>
        <p>
          <label>
            maitrise
            <br />
            <input type="text" name="maitrise" onChange={this.handleChange} value={this.state.hero.maitrise} />
          </label>
        </p>
        <p>
          <label>
            Description
            <br />
            <input type="text" name="description" onChange={this.handleChange} value={this.state.hero.description} />
          </label>
        </p>
        <p>
          <label>
            <input type="checkbox" name="tendance" onChange={this.handleChange} checked={this.state.hero.tendance}/>
            &nbsp;It is Trend?
          </label>
        </p>
        <input type="submit" value="Save" onClick={this.handleSave}/>
      </form>
    );
  }
}

export default HeroForm;