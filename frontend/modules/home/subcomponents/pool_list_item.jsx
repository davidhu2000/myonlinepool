import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

class PoolListItem extends React.Component {

  shorten(text) {
    let ret = text;
    if (ret.length > 15) {
      ret = ret.substr(0,15-3) + "...";
    }
    return ret;
  }

  render() {
    return (
      <div className="pool-list-item">
        <Link to={`/pool/${this.props.id}`}>
          <i className="fa fa-angle-right" aria-hidden="true" />
          {this.shorten(this.props.title)}
        </Link>
      </div>
    );
  }
}

PoolListItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired
};

export { PoolListItem };
