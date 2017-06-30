import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

class PoolListItem extends React.Component {

  shorten(text) {
    let ret = text;
    if (ret.length > 15) {
      ret = ret.substr(0,10-3) + "...";
    }
    return ret;
  }

  render() {
    return (
      <Link to={`/pool/${this.props.id}`}>
        <div className="pool-list-item">
          <i className="fa fa-angle-right" aria-hidden="true" />
          {this.shorten(this.props.title)}
        </div>
      </Link>
    );
  }
}

PoolListItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired
};

export { PoolListItem };
