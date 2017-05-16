import React from 'react';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='navbar-container'>
        <button>
          <i className="fa fa-angle-down" aria-hidden="true"></i>
          Settings
        </button>
        <h1>My Online Pool</h1>
        <button>
          <i className="fa fa-angle-down" aria-hidden="true"></i>
          Account
        </button>
      </div>
    );
  }
}

export default Navbar;
