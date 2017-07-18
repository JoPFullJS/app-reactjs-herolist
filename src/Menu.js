import React, { Component } from 'react';
import './menu.css';

class Menu extends Component{

	
	render() {
		return (
			<div className="margin">
				<button
					className={this.props.changeHero === true ? 'menuSelect' : 'menuNoSelect'}
					onClick={this.props.onHero}
				>Liste des Heros du Dev</button>
				<button
					className={this.props.changeForm === true ? 'menuSelect' : 'menuNoSelect'}
					onClick={this.props.onForm}
				>Ajouter un Hero du Dev</button>
				<button
					disabled={this.props.changeDetaille}
				>Détaille de ce hero du domaine</button>
			</div>
		);
	}
}
export default Menu;