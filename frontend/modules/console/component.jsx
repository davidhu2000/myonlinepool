import React from 'react';
import autoBind from 'react-autobind';
import { withRouter } from 'react-router';
// import PropTypes from 'prop-types';

class Console extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      week: 1
    };
    autoBind(this);
  }

  componentDidMount() {
    this._redirectUnlessAdmin(this.props.userId);
    this.props.fetchGames(this.state.week);
  }

  componentWillReceiveProps(newProps) {
    this._redirectUnlessAdmin(this.props.userId);
  }

  _redirectUnlessAdmin(userId) {
    if (userId !== 1) {
      this.props.router.push(`home`);
    }
  }

  updateWeek(dir) {
    let week = this.state.week + dir;
    if (week < 1) {
      week = 1;
    }

    if (week > 17) {
      week = 17;
    }

    this.setState({ week });
    if (!this.props.games[week]) {
      this.props.fetchGames(week);
    }
  }

  renderGames() {
    if (this.props.games[this.state.week]) {
      
    }
  }

  render() {
    return (
      <div>Admin Console</div>
    );
  }

}

export default withRouter(Console);
