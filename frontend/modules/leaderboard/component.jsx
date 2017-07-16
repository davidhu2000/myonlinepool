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

export default withRouter(Leaderboard);
