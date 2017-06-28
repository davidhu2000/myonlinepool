import React from 'react';
import autoBind from 'react-autobind';
import PropTypes from 'prop-types';
import { parseTime } from 'helpers';
import { hashHistory } from 'react-router';

import { FormTextInput } from 'common/components';

class GameForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      home_score: this.props.games[this.props.params.weekId][this.props.params.gameId].home_score,
      away_score: this.props.games[this.props.params.weekId][this.props.params.gameId].away_score,
      line: this.props.games[this.props.params.weekId][this.props.params.gameId].line,
      spread: this.props.games[this.props.params.weekId][this.props.params.gameId].spread,
      game_id: this.props.params.gameId
    };

    autoBind(this);
  }

  update(type) {
    return e => {
      this.setState({ [type]: e.target.value });
    };
  }

  updateGame(e) {
    e.preventDefault();
    // hashHistory.push(`console`);

    this.props.updateGame(this.state).then(
      () => hashHistory.push(`console`)
    );
  }

  render() {
    let routeInfo = this.props.params;
    let game = this.props.games[routeInfo.weekId][routeInfo.gameId];
    let timeInfo = parseTime(game.start_time);
    return (
      <div className="game-form-container">
        <form className='game-form' onSubmit={this.updateGame}>
          <div className='game-form-header'>
            {timeInfo.date}: { game.away_team } @ { game.home_team }
          </div>

          <FormTextInput
            update={this.update}
            type='text'
            value={this.state.home_score}
            label="Home Score"
            field='home_score'
            errorMessage="Please enter home score"
          />

          <FormTextInput
            update={this.update}
            type='text'
            value={this.state.away_score}
            label="Away Score"
            field="away_score"
            errorMessage="Please enter away score"
          />

          <FormTextInput
            update={this.update}
            type='text'
            value={this.state.line}
            label="Line"
            field='line'
            errorMessage="Please enter betting line"
          />

          <FormTextInput
            update={this.update}
            type='text'
            value={this.state.spread}
            label="Spread"
            field='spread'
            errorMessage="Please enter betting spread"
          />
          
          <input
            type="submit"
            className="game-update-button"
            value="Update"
          />
        </form>
      </div>
    );
  }
}

export default GameForm;
