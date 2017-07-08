import React from 'react';
import autoBind from 'react-autobind';
import { values } from 'lodash';
import { withRouter } from 'react-router';
import { LeaderboardItem } from './subcomponents/leaderboard_item';

class Leaderboard extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  renderMembers() {
    return values(this.props.pool.members).map(member => (
      <LeaderboardItem
        member={member}
        standings={this.props.pool.standings}
      />
    ));
  }

  render() {
    return (
      <div className="leaderboard-container">
        <div className="leaderboard-labels">
          <div>Name</div>
          <div>W1</div>
          <div>W2</div>
          <div>W3</div>
          <div>W4</div>
          <div>W5</div>
          <div>W6</div>
          <div>W7</div>
          <div>W8</div>
          <div>W9</div>
          <div>W10</div>
          <div>W11</div>
          <div>W12</div>
          <div>W13</div>
          <div>W14</div>
          <div>W15</div>
          <div>W16</div>
          <div>W17</div>
          <div>W18</div>
          <div>W19</div>
          <div>W20</div>
          <div>W22</div>
          <div>Record</div>
        </div>
        <div className="leaderboard-body">
          {this.renderMembers()}
        </div>
      </div>
    );
  }
}

export default withRouter(Leaderboard);
