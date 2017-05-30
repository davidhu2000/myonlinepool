import React from 'react';
import { Link, withRouter } from 'react-router';

const ModBoardItem = props => {

  return (
    <div className="modboard-item">
      <span>Moderator:</span> {props.Message}
    </div>
  );
};

export { ModBoardItem };
