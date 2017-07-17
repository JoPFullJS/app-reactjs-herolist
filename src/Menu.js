import React, { Component } from 'react';
import './menu.css';

class Menu extends Component{

	
	render() {
		return (
			<div className="margin">
				<button
					className={this.props.changeHero === true ? 'menuSelect' : 'menuNoSelect'}
					onClick={this.props.onHero}
				>Liste des Heros</button>
				<button
					className={this.props.changeForm === true ? 'menuSelect' : 'menuNoSelect'}
					onClick={this.props.onForm}
				>Ajouter un Heor</button>
				<button
					disabled={this.props.changeDetaille}
				>Détaille du Hero</button>
			</div>
		);
	}
}
export default Menu;