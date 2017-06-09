import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import enhanceWithClickOutside from 'react-click-outside';

import { signedoutLinks } from './links.json';

class Dropdown extends React.Component {
  handleClickOutside(e) {
    if (![e.path[0].id, e.path[1].id].includes('right-dropdown-button')) {
      this.props.toggleLeftDropdown();
    }
  }

  render() {
    return (
      <div className="settings-dropdown" id="account-dropdown">
        <div className="settings-dropdown-list">

          { signedoutLinks.map(item => (
            <Link to={item.link} onClick={this.props.toggleLeftDropdown}>
              {item.text}
            </Link>
          ))}
          
        </div>
      </div>
    );
  }
}

Dropdown.propTypes = {
  toggleLeftDropdown: PropTypes.func.isRequired
};

export const SignedoutDropdown = enhanceWithClickOutside(Dropdown);
