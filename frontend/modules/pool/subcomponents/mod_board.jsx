import React from 'react';
import { Link, withRouter } from 'react-router';
import ModBoardItem from './chat_box_item';

class ModBoard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="mod-board">
        <p className="mod-board-title">Mod Board</p>
        <ModBoardItem/>
      </div>
    );
  }
}

export default ModBoard;
