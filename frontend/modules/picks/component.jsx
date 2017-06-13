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
        {id: 1, home: "Cowboys", away:"Patriots", pick: "Cowboys"},
        {id: 2, home: "Raiders", away:"Seahawks", pick: "Seahawks"}
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
        Picks={this.state.picks}
        Game={game}
      />
    ))
  }

  render() {
    return (
      <div className="picks-container">
          <button onClick={ this.toggleWeek }>
            Week {this.state.week}
          </button>
          { this.state.showDropdown ?
          <form className="picks-form">
          {this.createLinks()}
          </form> : null }
          { this.createSelections() }
      </div>
    );
  }
}

export default withRouter(Picks);
