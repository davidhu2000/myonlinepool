import React from 'react';
import { Link, withRouter } from 'react-router';
import StandingsBoxItem from './standings_box_item';

class standingsBox extends React.Component {
  constructor(props) {
    super(props);
    this.genList = this.genList.bind(this);
  }


  genList() {
    let stands = this.props.Standings;
    console.log(stands);
    return stands.map( standing => (
      <StandingsBoxItem/>
    ));
  }

  render() {
    return (
      <div>
        {this.genList()}
        <h1>standings box</h1>
      </div>
    );
  }

}

export default standingsBox;
