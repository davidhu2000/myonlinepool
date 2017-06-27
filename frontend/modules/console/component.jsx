import React from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

class Console extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this._redirectUnlessAdmin(this.props.userId);
  }

  componentWillReceiveProps(newProps) {
    this._redirectUnlessAdmin(this.props.userId);
  }

  _redirectUnlessAdmin(userId) {
    if (userId !== 1) {
      this.props.router.push(`home`);
    }
  }

}

export default Console;