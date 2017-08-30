import React from 'react';
import enhanceWithClickOutside from 'react-click-outside';
import autoBind from 'react-autobind';
import PropTypes from 'prop-types';

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
          <div className="auto-button">
          Favorites
          </div>
        </button>
        <button onClick={this.props.pickHome}>
          <div className="auto-button">
          Home
          </div>
        </button>
        <button onClick={this.props.pickAway}>
          <div className="auto-button">
          Away
          </div>
        </button>
      </div>
    );
  }
}

Dropdown.propTypes = {
  toggleDropdown: PropTypes.func.isRequired,
  pickFavorites: PropTypes.func.isRequired,
  pickHome: PropTypes.func.isRequired,
  pickAway: PropTypes.func.isRequired
};

export const PicksDropdown = enhanceWithClickOutside(Dropdown);
