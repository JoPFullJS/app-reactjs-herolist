import React, { Component } from 'react';
import HeroRow from './HeroRow';
import SortableColumnHeader from './SortableColumnHeader';
import './SortableColumnHeader.css'

class HeroTable extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      sort: {
        column: 'pseudo',
        direction: 'desc'
      }
    };
    this.sortByKeyAndOrder = this.sortByKeyAndOrder.bind(this);
    this.handleSort = this.handleSort.bind(this);
    this.handleDestroy = this.handleDestroy.bind(this);
    this.handleAffiche = this.handleAffiche.bind(this);
  }
  sortByKeyAndOrder(objectA, objectB) {
    let isDesc = this.state.sort.direction === 'desc' ? 1 : -1;
    let [a, b] = [objectA[this.state.sort.column], objectB[this.state.sort.column]];
    if (this.state.sort.column === 'maitrise') {
      [a, b] = [a, b].map((value) => parseFloat(value.replace(/[^\d\.]/g, ''), 10));
    }
    if (a > b) {
      return 1 * isDesc;
    }
    if (a < b) {
      return -1 * isDesc;
    }
    return 0;
  }

  handleDestroy(id) {
    this.props.onDestroy(id);
  }
  handleAffiche(id) {
    this.props.onAffiche(id);
  }
  handleSort(column, direction) {
    this.setState({
      sort: {
        column: column,
        direction: direction
      }
    });
  }
  sortHeros() {
    let herosAsArray = Object.keys(this.props.heros).map((pid) => this.props.heros[pid]);
    return herosAsArray.sort(this.sortByKeyAndOrder);
  }
  render() {
    var rows = [];
    this.sortHeros().forEach((hero) => {
      if (hero.pseudo.indexOf(this.props.filterText) === -1 || (!hero.tendance && this.props.availableOnly)) {
        return;
      }
      rows.push(<HeroRow hero={hero} key={hero.id} onDestroy={this.handleDestroy} onAffiche={this.handleAffiche}></HeroRow>);
    });

    return (
      <div className="container">
          <div>
              <SortableColumnHeader
                onSort={this.handleSort}
                currentSort={this.state.sort}
                column="pseudo"
              ></SortableColumnHeader>
              <SortableColumnHeader
                onSort={this.handleSort}
                currentSort={this.state.sort}
                column="maitrise"
              ></SortableColumnHeader>
          </div>
          <div>{rows}</div>
      </div>
    );
  }
}

export default HeroTable;