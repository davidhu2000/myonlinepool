import React from 'react';
import { withRouter, Link } from 'react-router';
import range from 'lodash';

class Picks extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showDropdown: false,
      week: 1,
      games: [
        {home: "Cowboys", away:"Patriots"},
        {home: "Raiders", away:"Seahawks"},
        {home: "Giants", away: "Stealers"},
        {home: "Packers", away: "Broncos"},
        {home: "Vikings", away: "49ers"},
        {home: "Eagles", away: "Redskins"},
        {home: "Lions", away: "Texans"},
        {home: "Saints", away: "Panthers"},
        {home: "Bears", away: "Cardinals"},
        {home: "Browns", away: "Falcons"},
        {home: "Ravens", away: "Jets"},
        {home: "Bills", away: "Rams"},
        {home: "Chargers", away: "Chiefs"},
        {home: "Colts", away: "Bengals"},
        {home: "Dolphins", away: "Buccaneers"},
        {home: "Titans", away: "Jaguars"}
      ]
    }

    this.toggleWeek = this.toggleWeek.bind(this);
    this.createLinks = this.createLinks.bind(this);
    this.updateWeek = this.updateWeek.bind(this);
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

  createLinks() {
    return _.range(1,17).map( week => (
      <button name= "week"
              value= { week }
              onClick={ this.updateWeek.bind(this) }
              className="picks-form-item">{week}</button>
    ));
  }

  createSelections() {
    return this.state.games.map( game => (
      <div className="selection-tile">
        <img src={`assets/logos/${game.home}.gif`}></img>
        <img src={`assets/logos/${game.away}.gif`}></img>
      </div>
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
          Favorites
        </div>
      </div>
    );
  }
}

export default withRouter(Picks);
