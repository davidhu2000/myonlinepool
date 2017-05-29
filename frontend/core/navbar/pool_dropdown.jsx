import React from 'react';
import { Link, withRouter } from 'react-router';

const PoolDropdown = props => {

  return (
    <div className="settings-dropdown" id="settings-dropdown">
      <div className="settings-dropdown-list">
        <a>
          Pool Dropdown
        </a>
        <a>
          Not FAQS
        </a>
        <a>
          Not Contact
        </a>
        <a>
          Not Affiliates
        </a>
        <a>
          Not Pricing
        </a>
      </div>
    </div>
  );
};

export default PoolDropdown;
