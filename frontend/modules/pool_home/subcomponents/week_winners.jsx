import React from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';

class WeeklyWinners extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  render() {
    console.log(this.props);
    return (
      <div>
      </div>
    );
  }
}


export { WeeklyWinners };
