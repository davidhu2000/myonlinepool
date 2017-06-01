import React from 'react';
import { withRouter, Link } from 'react-router';
import StandingsBox from "common/components/standings_box";
import { ChatBox, ModBoard } from "./subcomponents";

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
        {name: "sanders", score: 44, losses: 3, pool: "random pool 1"},
        {name: "ditka", score: 23, losses: 2, pool: "office pool 2"},
        {name: "brady", score: 54, losses: 28, pool: "random pool 1"}
      ],
      chat: [
        {name: "jim", message:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore"},
        {name: "tom", message:"quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
        {name: "bill", message:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris "},
        {name: "hank", message:"et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."},
        {name: "steve", message:" Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
        {name: "tom", message:"quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
        {name: "bill", message:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris "},
        {name: "jim", message:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore"}
      ],
      modcoms: ["Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore", "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore", "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore", "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore", "five", "six", "seven"],
      moderator: "Dave"
    }
  }

  render() {
    return (
      <div className="pool-container">
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
        <div className="pool-coms">
          <ChatBox
            Chat={this.state.chat.slice(0, 20)}
          />
          <ModBoard
            Chat={this.state.modcoms.slice(0, 5)}
            Mod={this.state.moderator}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(Pool);
