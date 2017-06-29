import React from 'react';
import autoBind from 'react-autobind';
import PropTypes from 'prop-types';
import { parseTime } from 'helpers';
import { hashHistory } from 'react-router';

import { FormTextInput } from 'common/components';

class GameForm extends React.Component {
  constructor(props) {
    super(props);

    let { games, params } = props;
    let { weekId, gameId } = params;

    let game = games[weekId][gameId];

    this.state = {
      home_score: game.home_score,
      away_score: game.away_score,
      completed: game.completed,
      line: game.line,
      spread: game.spread,
      game_id: gameId
    };

    autoBind(this);
  }

  update(type) {
    return e => {
      this.setState({ [type]: e.target.value });
      console.log(this.state);
    };
  }

  updateGame(e) {
    e.preventDefault();

    this.props.updateGame(this.state).then(
      () => hashHistory.push(`console`)
    );
  }

  handleChange(value) {
    this.setState({ completed: value });
  }

  render() {
    // TODO: add function to update start time
    // TODO: do not use FormTextInput, do need validation.
    
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
            type='number'
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

          <select value={this.state.completed} onChange={e => this.handleChange(e.target.value)}>
            <option value="true">Completed</option>
            <option value="false">Pending</option>
          </select>
          
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
