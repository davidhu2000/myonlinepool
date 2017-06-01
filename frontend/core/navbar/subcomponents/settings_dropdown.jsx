import React from 'react';
import { Link, withRouter } from 'react-router';

const SettingsDropdown = () => {

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
};

export { SettingsDropdown };
