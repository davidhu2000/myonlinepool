import React from 'react';
import { Link, withRouter } from 'react-router';

const ModBoardItem = props => {

  return (
    <div className="modboard-item">
      <p className="author">Admin</p>
      <div className="message">{props.Message}</div>
    </div>
  );
};

export { ModBoardItem };
