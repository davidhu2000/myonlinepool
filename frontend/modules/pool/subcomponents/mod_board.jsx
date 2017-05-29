import React from 'react';
import { Link, withRouter } from 'react-router';
import ModBoardItem from './chat_box_item';

class ModBoard extends React.Component {
  constructor(props) {
    super(props);
    this.genList = this.genList.bind(this);
  }

  genList() {
    let chat = this.props.Chat;
    return chat.map( message => (
      <ModBoardItem
        Message={message}
        />
    ));
  }

  render() {
    return (
      <div className="mod-board">
        <h2>Mod Board</h2>
        {this.genList()}
      </div>
    );
  }
}

export default ModBoard;
