import React from 'react';
import { Link, withRouter } from 'react-router';

const ModBoardItem = props => {

  return (
    <div className="modboard-item">
      <span>admin:</span> {props.Message}
    </div>
  );
};

export { ModBoardItem };
