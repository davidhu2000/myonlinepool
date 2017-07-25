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
      <div>
        <Link to={`/pool/${this.props.id}`}>
          <div className="button pool-list-item">
            {this.shorten(this.props.title)}
          </div>
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
