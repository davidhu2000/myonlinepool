import React from 'react';
import { Link, withRouter } from 'react-router';
import { ModBoardItem } from './mod_board_item';

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
        key={Math.random()}
        />
    ));
  }

  render() {
    return (
      <div className="modboard">
        <h2>Bulletins</h2>
          <div className="modboard-container-container">
            <div className="modboard-container">
              {this.genList()}
            </div>
          </div>

      </div>
    );
  }
}

export { ModBoard };
