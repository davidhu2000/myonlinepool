import React from 'react';
import autoBind from 'react-autobind';
import PropTypes from 'prop-types';
import { parseTime } from 'helpers';
import { hashHistory } from 'react-router';
// import { WaitingPage } from './subcomponents';

class GameForm extends React.Component {
  constructor(props) {
    super(props);

    let { games, params } = props;
    let { weekId, gameId } = params;

    let game = games[weekId][gameId];

    console.log(game);

    this.state = {
      home_score: game.home_score,
      away_score: game.away_score,
      completed: game.completed,
      line: game.line,
      spread: game.spread,
      game_id: gameId,
      week: weekId,
      isProcessing: false,
      start_time: game.start_time
    };

    autoBind(this);
  }

  componentDidMount() {
    this._redirectUnlessAdmin(this.props.userId);
  }

  componentWillReceiveProps(newProps) {
    this._redirectUnlessAdmin(newProps.userId);
  }

  _redirectUnlessAdmin(userId) {
    if (userId !== 1) {
      this.props.router.replace(`home`);
    }
  }

  update(type) {
    return e => {
      this.setState({ [type]: e.target.value });
    };
  }

  updateGame(e) {
    e.preventDefault();
    // this.setState({ isProcessing: true });
    this.props.updateGame(this.state);
    hashHistory.replace('/console');
  }

  handleChange(value) {
    this.setState({ completed: value });
  }

  render() {
    // if (this.state.isProcessing) {
    //   return (
    //     <div className="game-form-container">
    //       <WaitingPage />
    //     </div>
    //   );
    // }
    // TODO: add function to update start time
    // TODO: do not use FormTextInput, don't need validation.
    // TODO: prop-type validations
    // TODO: allow for mass update so do have to wait for individual processing
    // TODO: do not center form, while loading, the form header pop to center.
    let routeInfo = this.props.params;
    let game = this.props.games[routeInfo.weekId][routeInfo.gameId];
    let timeInfo = parseTime(game.start_time);
    return (
      <div className="game-form-container">
        <form className='game-form' onSubmit={this.updateGame}>
          <div className='game-form-header'>
            {timeInfo.date}: { game.away_team } @ { game.home_team }
          </div>

          <div className='poolform-group'>
            <input
              onChange={this.update('away_score')}
              value={this.state.away_score}
              type='number'
              className='auth-form-password'
            />
            <span className='bar' />
            <label htmlFor='number'>Away Score</label>
          </div>

          <div className='poolform-group'>
            <input
              onChange={this.update('home_score')}
              value={this.state.home_score}
              type='number'
              className='auth-form-password'
            />
            <span className='bar' />
            <label htmlFor='number'>Home Score</label>
          </div>

          <div className='poolform-group'>
            <input
              onChange={this.update('line')}
              value={this.state.line}
              type='number'
              className='auth-form-password'
            />
            <span className='bar' />
            <label htmlFor='number'>Line</label>
          </div>

          <div className='poolform-group'>
            <input
              onChange={this.update('spread')}
              value={this.state.spread}
              type='number'
              className='auth-form-password'
            />
            <span className='bar' />
            <label htmlFor='number'>Over</label>
          </div>

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

GameForm.propTypes = {
  games: PropTypes.shape().isRequired,
  userId: PropTypes.number.isRequired,
  updateGame: PropTypes.func.isRequired,
  params: PropTypes.shape().isRequired
};

export default GameForm;
