import React from 'react';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='navbar-container'>
        <button>settings</button>
        <p>My Online Pool</p>
        <button>account</button>
      </div>
    );
  }
}

export default Navbar;
