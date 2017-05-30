import React from 'react';
import { Link, withRouter } from 'react-router';

const PoolDropdown = props => {

  return (
    <div className="pool-dropdown" id="pool-dropdown">
      <div className="pool-dropdown-list">
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
