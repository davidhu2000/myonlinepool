import React from 'react';
import { Link, withRouter } from 'react-router';

const ModBoardItem = props => {

  return (
    <div className="chat-box-item">
      <p>
        {props.Message}
      </p>
    </div>
  );
};

export default ModBoardItem;
