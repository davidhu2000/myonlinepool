import React from 'react';
import enhanceWithClickOutside from 'react-click-outside';
import autoBind from 'react-autobind';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  render() {
    return (
      <div className="picks-dropdown">
        multiple choice
      </div>
    );
  }
}

export const PicksDropdown = enhanceWithClickOutside(Dropdown);
