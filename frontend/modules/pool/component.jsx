import React from 'react';
import { withRouter, Link } from 'react-router';
import StandingsBox from "../../common/components/standings_box";
import ChatBox from "./subcomponents/chat_box";
import ModBoard from "./subcomponents/mod_board";

class Pool extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      standings: [
        {name: "alex", score: 100, losses: 1, pool: "office pool 1"},
        {name: "david", score: 1, losses: 100, pool: "family pool 2"},
        {name: "raymond", score: 101, losses: 0, pool: "random pool 1"},
        {name: "ditka", score: 23, losses: 2, pool: "office pool 2"},
        {name: "brady", score: 54, losses: 28, pool: "random pool 1"},
        {name: "manning", score: 89, losses: 3, pool: "office pool 1"},
        {name: "cinco", score: 2, losses: 88, pool: "family pool 1"},
        {name: "clowney", score: 103, losses: 3, pool: "family pool 3"},
        {name: "watt", score: 77, losses: 5, pool: "random pool 2"},
        {name: "sanders", score: 44, losses: 3, pool: "random pool 1"}
      ],
      chat: ["one","two","three","four","five","six","seven"],
      modcoms: ["one", "two", "three", "four", "five", "six", "seven"]
    }
  }

  render() {
    return (
      <div className="pool-container">
        <div className="pool-coms">
          <div className="pool-message">
            <h2>Office Pool 1</h2>
            <p>-Check standings</p>
            <p>-Make picks</p>
            <p>-Talk smack</p>
          </div>
          <ChatBox
            Chat={this.state.chat.slice(0,5)}
            />
          <ModBoard
            Chat={this.state.modcoms.slice(0,5)}
            />
        </div>
        <div className="pool-standings">
          <StandingsBox
            Title="Week Total"
            Standings={this.state.standings}
            />
          <StandingsBox
            Title="Season Total"
            Standings={this.state.standings}
            />
        </div>
      </div>
    );
  }
}

export default withRouter(Pool);
