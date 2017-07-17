import React, { Component } from 'react';
import './HeroRow.css';

class HeroRow extends Component {
  constructor(props) {
    super(props);
    this.destroy = this.destroy.bind(this);
    this.affiche = this.affiche.bind(this);
  }
  destroy() {
    this.props.onDestroy(this.props.hero.id);
  }
  affiche() {
    this.props.onAffiche(this.props.hero.id);
  }
  render() {
    var pseudo = this.props.hero.tendance ? <h4>{this.props.hero.pseudo}</h4> : <h4 style={{color: 'red'}}>{this.props.hero.pseudo}</h4>;
    return (
      <article className="intitule-services table interaction">
        <header>
          {pseudo}
        </header>
        <p className="description">Maitrise : <strong>{this.props.hero.maitrise}</strong></p>
        <div className="link-travx"><a title="{this.props.hero.pseudo}" onClick={this.affiche}>En savoir plus !</a></div>
        <div className="link-sup"><a title="supprimer" onClick={this.destroy}>Supprimer !</a></div>
      </article>
    );
  }
}

export default HeroRow;