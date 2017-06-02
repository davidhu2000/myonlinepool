import React from 'react';
import { Link, withRouter } from 'react-router';

const ModBoardItem = props => {

  return (
    <div className="modboard-item">
      <div className="author">Admin</div>
      <div className="message">{props.Message}</div>
    </div>
  );
};

export { ModBoardItem };
