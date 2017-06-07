import React from 'react';
import { withRouter, Link } from 'react-router';
import range from 'lodash';
import PickForm from 'modules/picks/subcomponents/pick_form';

class Picks extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showDropdown: false,
      week: 1,
      games: [
        {id: 1, home: "Cowboys", away:"Patriots"},
        {id: 2, home: "Raiders", away:"Seahawks"},
        {id: 3, home: "Giants", away: "Stealers"},
        {id: 4, home: "Packers", away: "Broncos"},
        {id: 5, home: "Vikings", away: "49ers"},
        {id: 6, home: "Eagles", away: "Redskins"},
        {id: 7, home: "Lions", away: "Texans"},
        {id: 8, home: "Saints", away: "Panthers"},
        {id: 9, home: "Bears", away: "Cardinals"},
        {id: 10, home: "Browns", away: "Falcons"},
        {id: 11, home: "Ravens", away: "Jets"},
        {id: 12, home: "Bills", away: "Rams"},
        {id: 13, home: "Chargers", away: "Chiefs"},
        {id: 14, home: "Colts", away: "Bengals"},
        {id: 15, home: "Dolphins", away: "Buccaneers"},
        {id: 16, home: "Titans", away: "Jaguars"}
      ],
      picks: [
        {game_id: 1, home: "Cowboys", away:"Patriots", pick: "home"},
        {game_id: 2, home: "Raiders", away:"Seahawks", pick: "away"},
        {game_id: 3, home: "Giants", away: "Stealers", pick: "home"},
        {game_id: 4, home: "Packers", away: "Broncos", pick: "home"},
        {game_id: 5, home: "Vikings", away: "49ers", pick: "away"},
        {game_id: 6, home: "Eagles", away: "Redskins", pick: "home"},
        {game_id: 7, home: "Lions", away: "Texans", pick: "away"},
        {game_id: 8, home: "Saints", away: "Panthers", pick: "home"},
        {game_id: 9, home: "Bears", away: "Cardinals", pick: "home"},
        {game_id: 10, home: "Browns", away: "Falcons", pick: "away"},
        {game_id: 11, home: "Ravens", away: "Jets", pick: "away"},
        {game_id: 12, home: "Bills", away: "Rams", pick: "away"},
        {game_id: 13, home: "Chargers", away: "Chiefs", pick: "away"},
        {game_id: 14, home: "Colts", away: "Bengals", pick: "away"},
        {game_id: 15, home: "Dolphins", away: "Buccaneers", pick: "away"},
        {game_id: 16, home: "Titans", away: "Jaguars", pick: "away"}
      ]
    }

    this.toggleWeek = this.toggleWeek.bind(this);
    this.createLinks = this.createLinks.bind(this);
    this.updateWeek = this.updateWeek.bind(this);
    this.submitPick = this.submitPick.bind(this);
  }

  toggleWeek() {
    this.setState({ showDropdown: !this.state.showDropdown });
  }

  update(field) {
    return e => {
      this.setState({
        [field]: e.target.value
      });
    };
  }

  updateWeek(e) {
    e.preventDefault();
    this.setState({week:e.target.value})
  }

  submitPick(e) {
    e.preventDefault();
    console.log("submitted");
  }

  createLinks() {
    return _.range(1,17).map( week => (
      <button
        name="week"
        value={week}
        onClick={this.updateWeek.bind(this)}
        className="picks-form-item"
      >
        {week}
      </button>
    ));
  }

  // createSelections() {
  //   return this.state.games.map( game => (
  //     <form className="selection-item">
  //       <img src={`assets/logos/${game.home}.gif`}></img>
  //       <div>At</div>
  //       <img src={`assets/logos/${game.away}.gif`}></img>
  //     </form>
  //   ))
  // }

  createSelections() {
    return this.state.games.map( game => (
      <PickForm
        Game={game}
      />
    ))
  }

  render() {
    return (
      <div className="picks-container">
        <div className="picks-left">
          <button onClick={ this.toggleWeek }>
            Week {this.state.week}
          </button>
          { this.state.showDropdown ?
          <form className="picks-form">
          {this.createLinks()}
          </form> : null }
            <div className="picks-selection-container">
              { this.createSelections() }
            </div>
        </div>
        <div className="picks-right">
          <button>
          Favorites
          </button>
          <div className="picks-selection-container">
            { this.createSelections() }
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Picks);
