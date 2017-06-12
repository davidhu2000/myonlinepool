import React from 'react';
import { withRouter, Link } from 'react-router';
import StandingsBox from "common/components/standings_box";
import { ChatBox, ModBoard } from "./subcomponents";

class Pool extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return (
      <div className="pool-container">
        <div className="pool-standings">
          <StandingsBox
            Title="Weekly Leaders"
            Standings={this.props.pool.leaders}
          />
          <StandingsBox
            Title="Season Leaders"
            Standings={this.props.pool.leaders}
          />
        </div>
        <div className="pool-bulletin">
        <ModBoard
          Chat={this.props.pool.bulletins}
          Mod={this.props.pool.admin}
        />
        </div>
        <div className="pool-coms">
          <ChatBox
            Dispatch={this.props.sendMessage}
            Chat={this.props.messages}
          />
        </div>
        </div>
    );
  }
}

export default withRouter(Pool);
