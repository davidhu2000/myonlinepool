import React from 'react';
import PropTypes from 'prop-types';
import { StandingsBoxItem } from './standings_box_item';

class StandingsBox extends React.Component {
  renderList() {
    if (this.props.standings.length < 1) {
      return <div className="preseason-text">Seasonal data pending</div>;
    } else {
      return this.props.standings.slice(0, 10).map(standing => (
        <StandingsBoxItem
          key={Math.random()}
          standing={standing}
        />
      ));
    }
  }

  render() {
    return (
      <div className="standings-box">
        <div className="standings-box-title">
          <h1>
            {this.props.title}
          </h1>
        </div>
        <div className="standings-box-top-item">
          <div className="title">Player</div>
          <div className="pool">Pool</div>
          <div className="score">Points</div>
        </div>
        {this.renderList()}
      </div>
    );
  }
}

StandingsBox.propTypes = {
  title: PropTypes.string.isRequired,
  standings: PropTypes.arrayOf(PropTypes.shape()).isRequired
};

export { StandingsBox };
