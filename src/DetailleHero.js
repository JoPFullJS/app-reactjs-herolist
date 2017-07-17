import React, { Component } from 'react';
import './HeroRow.css';

class DetailleHero extends Component {

	render() {

		return (
			<div>
				<button
					onClick={this.props.onReset}
				>Retour à la list</button>
				<article className="intitule-services table interaction">
			        <header>
			          <h4>ID : {this.props.detaille.id}</h4>
			          <h4>{this.props.detaille.pseudo}</h4>
			        </header>
			        <p className="description">{this.props.detaille.description}</p>
			        <p className="description">Maitrise : <strong>{this.props.detaille.maitrise}</strong></p>
			     </article>
			</div>
		);
	}
}
export default DetailleHero;