import React from 'react';
import enhanceWithClickOutside from 'react-click-outside';
import autoBind from 'react-autobind';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  handleClickOutside(e) {
    if (![e.path[0].id, e.path[1].id].includes('autopick-button')) {
      this.props.toggleDropdown();
    }
  }

  render() {
    return (
      <div className="picks-dropdown">
        <button onClick={this.props.pickFavorites}>
          Favorites
        </button>
        <button onClick={this.props.pickHome}>
          Home
        </button>
        <button onClick={this.props.pickAway}>
          Away
        </button>
      </div>
    );
  }
}

export const PicksDropdown = enhanceWithClickOutside(Dropdown);
