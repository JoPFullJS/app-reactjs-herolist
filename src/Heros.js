import React, { Component } from 'react';
import Filters from './Filters';
import HeroForm from './HeroForm';
import HeroTable from './HeroTable';
import Menu from './Menu';
import DetailleHero from './DetailleHero';
import './heros.css';

var HEROS = {
  '1': {id: 1, pseudo: 'HTML', maitrise: '8,2', description: 'Description 1', tendance: false},
  '2': {id: 2, pseudo: 'CSS', maitrise: '2,6', description: 'Description 2', tendance: false},
  '3': {id: 3, pseudo: 'JavaScript', maitrise: '6,9', description: 'Description 3', tendance: true},
  '4': {id: 4, pseudo: 'Développement', maitrise: '5,8', description: 'Description 4', tendance: true},
  '5': {id: 5, pseudo: 'Intégration', maitrise: '3,4', description: 'Description 5', tendance: false},
  '6': {id: 6, pseudo: 'Web Design', maitrise: '5,0', description: 'Description 6', tendance: true},
  '7': {id: 7, pseudo: 'PHP', maitrise: '9,2', description: 'Description 7', tendance: true},
  '8': {id: 8, pseudo: 'MySql', maitrise: '4,5', description: 'Description 8', tendance: false},
  '9': {id: 9, pseudo: 'W3C', maitrise: '7,6', description: 'Description 9', tendance: true}
};

const hasFalse = false;

const hasTrue = true;

class Heros extends Component {
  constructor(props){
    super(props);
    this.state = {
      filterText: '',
      availableOnly: false,
      heros: HEROS,
      hero: true,
      form: false,
      detaille: true,
      afficheHero: 1
    }
    this.handleFilter = this.handleFilter.bind(this);
    this.handleDestroy = this.handleDestroy.bind(this);
    this.saveHero = this.saveHero.bind(this);
    this.heroVisible = this.heroVisible.bind(this);
    this.formVisible = this.formVisible.bind(this);
    this.handleAffiche = this.handleAffiche.bind(this);
    this.handleRest = this.handleRest.bind(this);
    
  }

  handleFilter(filterInput) {
    this.setState(filterInput);
  }

  saveHero(hero) {
    if (!hero.id) {
      hero.id = new Date().getTime();
    }
    this.setState((prevState) => {
      let heros = prevState.heros;
      heros[hero.id] = hero;
      return { heros };
      
      
    });
  }

  handleDestroy(heroId) {
    this.setState((prevState) => {
      let heros = prevState.heros;
      delete heros[heroId];
      return { heros };
    });
  }
  handleAffiche(hero){
    this.setState({
      afficheHero : hero,
      hero : hasFalse,
      form : hasFalse,
      detaille : hasFalse
    });
  }
    heroVisible(e){
      this.setState({
        hero : !this.state.hero,
        form : !this.state.form
      });

    }
  formVisible(e){
      this.setState({
        form : !this.state.form,
        hero : !this.state.hero
      });

    }
  handleRest(e){
      this.setState({
        form : hasFalse,
        hero : hasTrue,
        detaille : hasTrue
      });

  }
  
  render() {
    return (
      <div className="App">
        
        <Menu
          onHero={this.heroVisible}
          onForm={this.formVisible}
          changeHero={this.state.hero}
          changeDetaille={this.state.detaille}
          changeForm={this.state.form}
        ></Menu>
        
        <div className={this.state.hero === true ? 'visible' : 'no-visible'} >

          <Filters 
            filterText={this.state.filterText}
            availableOnly={this.state.availableOnly}
            onFilter={this.handleFilter}
          ></Filters>
          <HeroTable
            heros={this.state.heros}
            filterText={this.state.filterText}
            availableOnly={this.state.availableOnly}
            onDestroy={this.handleDestroy}
            onAffiche={this.handleAffiche}
          ></HeroTable>
        </div>

        <div className={this.state.form === true ? 'visible' : 'no-visible'}>
          <HeroForm
              onSave={this.saveHero} 
          ></HeroForm>

        </div>

        <div className={this.state.detaille === true ? 'no-visible' : 'visible'}>
          <DetailleHero 
            detaille={this.state.heros[this.state.afficheHero]}
            onReset={this.handleRest}
          ></DetailleHero>
        </div>

      </div>
    );
  }
}

export default Heros;
