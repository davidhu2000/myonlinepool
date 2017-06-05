import React from 'react';
import { Link, withRouter } from 'react-router';
import enhanceWithClickOutside from 'react-click-outside';

class Dropdown extends React.Component {
  handleClickOutside(e) {
    if (![e.path[0].id, e.path[1].id].includes('left-dropdown-button')) {
      this.props.toggleLeftDropdown();
    }
  }

  render() {
    return (
      <div className="settings-dropdown" id="settings-dropdown">
        <div className="settings-dropdown-list">
          <a>
            About Us
          </a>
          <a>
            FAQs
          </a>
          <a>
            Contact Us
          </a>
          <a>
            Affiliates
          </a>
          <a>
            Pricing
          </a>
        </div>
      </div>
    );
  }
};

export const SettingsDropdown = enhanceWithClickOutside(Dropdown);