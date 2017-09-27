import React from 'react';
import autoBind from 'react-autobind';
import PropTypes from 'prop-types';

import { values } from 'lodash';
import { calculateSeasonStandings } from 'helpers';
import { withRouter } from 'react-router';
import { LeaderboardItem } from './subcomponents';

class Leaderboard extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  renderMembers() {
    let sorted = values(calculateSeasonStandings(this.props.pool.standings));
    sorted.sort((obj1, obj2) => {
      return obj2.correctPicks - obj1.correctPicks;
    });

    return sorted.map(standing => (
      <LeaderboardItem
        member={this.props.pool.members[standing.userId]}
        standings={this.props.pool.standings}
        key={standing.userId}
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
      </div>
    );
  }
}

Leaderboard.propTypes = {
  pool: PropTypes.shape({
    members: PropTypes.shape().isRequired,
    standings: PropTypes.shape().isRequired
  }).isRequired
};

export default withRouter(Leaderboard);
