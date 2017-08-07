import React from 'react';
import autoBind from 'react-autobind';
import { values } from 'lodash';
import { withRouter } from 'react-router';
import { LeaderboardItem, LeaderboardWeeklyItem } from './subcomponents';

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
        key={member.id}
      />
    ));
  }

  renderWeeklyWinners() {
    let actualStandings = this.props.pool.standings;
    delete actualStandings[21];


    return values(actualStandings).slice(1).map(standing => (
      <LeaderboardWeeklyItem
        members={this.props.pool.members}
        standings={standing}
      />
    ));
  }

  render() {
    return (
      <div className="leaderboard-container">
        <div className="leaderboard-banner">
          Leaderboard
        </div>
        <div className="leaderboard-labels">
          <div className="title">Name</div>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
          <div>8</div>
          <div>9</div>
          <div>10</div>
          <div>11</div>
          <div>12</div>
          <div>13</div>
          <div>14</div>
          <div>15</div>
          <div>16</div>
          <div>17</div>
          <div>18</div>
          <div>19</div>
          <div>20</div>
          <div>22</div>
          <div className="points">Points</div>
        </div>
        <div className="leaderboard-body">
          {this.renderMembers()}
        </div>
        <div className="leaderboard-banner">
          Weekly Winners
        </div>
        <div className="leaderboard-weekly-labels">
          <div className="leaderboard-name">Name</div>
          <div className="leaderboard-week">Week</div>
          <div className="leaderboard-score">Points</div>
        </div>
        <div className="leaderboard-weekly-body">
          {this.renderWeeklyWinners()}
        </div>
      </div>
    );
  }
}

export default withRouter(Leaderboard);
