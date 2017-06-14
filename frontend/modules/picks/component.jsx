import React from 'react';
import { withRouter, Link } from 'react-router';
import range from 'lodash';
import autoBind from 'react-autobind';
import PickForm from 'modules/picks/subcomponents/pick_form';

class Picks extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showDropdown: false,
      week: 1,
      games: [
        { id: 1, home: "Cowboys", away: "Patriots" },
        { id: 2, home: "Raiders", away: "Seahawks" },
        { id: 3, home: "Giants", away: "Stealers" },
        { id: 4, home: "Packers", away: "Broncos" },
        { id: 5, home: "Vikings", away: "49ers" },
        { id: 6, home: "Eagles", away: "Redskins" },
        { id: 7, home: "Lions", away: "Texans" },
        { id: 8, home: "Saints", away: "Panthers" },
        { id: 9, home: "Bears", away: "Cardinals" },
        { id: 10, home: "Browns", away: "Falcons" },
        { id: 11, home: "Ravens", away: "Jets" },
        { id: 12, home: "Bills", away: "Rams" },
        { id: 13, home: "Chargers", away: "Chiefs" },
        { id: 14, home: "Colts", away: "Bengals" },
        { id: 15, home: "Dolphins", away: "Buccaneers" },
        { id: 16, home: "Titans", away: "Jaguars" }
      ],
      picks: [
        { id: 1, home: "Cowboys", away: "Patriots", pick: "Cowboys" },
        { id: 2, home: "Raiders", away: "Seahawks", pick: "Seahawks" }
      ]
    };
    autoBind(this);
  }

  submitPick(e) {
    e.preventDefault();
    console.log("submitted");
  }

  createSelections() {
    return this.state.games.map( game => (
      <PickForm
        Picks={this.state.picks}
        Game={game}
      />
    ))
  }

  prevWeek() {
    if (this.state.week > 1) {
      this.setState({ week: this.state.week - 1 });
    }
  }

  nextWeek() {
    if (this.state.week < 17) {
      this.setState({ week: this.state.week + 1 });
    }
  }

  render() {
    return (
      <div className="picks-container">
        <div className="picks-header">
          <i
            onClick={this.prevWeek}
            className="fa fa-caret-left"
            aria-hidden="true"
          />
          Week {this.state.week}
          <i
            onClick={this.nextWeek}
            className="fa fa-caret-right"
            aria-hidden="true"
          />
        </div>
        <div className="picks-selections">
          <div className="picks-labels">
            <div>Away</div>
            <div>Date</div>
            <div>Time</div>
            <div>Line</div>
            <div>Spread</div>
            <div>Home</div>
          </div>
          { this.createSelections() }
        </div>
      </div>
    );
  }
}

export default withRouter(Picks);
