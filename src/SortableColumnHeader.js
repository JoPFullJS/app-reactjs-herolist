import React, { Component } from 'react';
import './SortableColumnHeader.css';

const Asc = 'asc';
const Desc = 'desc';

class SortableColumnHeader extends Component {
  constructor(props) {
    super(props);
    
    this.handleAsc = this.handleAsc.bind(this);
    this.handleDesc = this.handleDesc.bind(this);
  }
  handleAsc(e) {
    this.props.onSort(this.props.column, Asc);
  }
  handleDesc(e) {
    this.props.onSort(this.props.column, Desc);
  }
  render() {
    let currentSort = this.props.currentSort.column === this.props.column ? this.props.currentSort.direction : false;
    return(
      <div className="triage">
        <div className="bandeau">Trier par {this.props.column}</div>
        <div>
          <ul>
            <li
              className="block"
              onClick={this.handleAsc}
              className={currentSort === 'asc' ? 'SortableColumnHeader-current' : 'unSortableColumnHeader-current'}
            >Croissant</li>
            <li
              className="block"
              onClick={this.handleDesc}
              className={currentSort === 'desc' ? 'SortableColumnHeader-current' : 'unSortableColumnHeader-current'}
            >Décroissant</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default SortableColumnHeader;