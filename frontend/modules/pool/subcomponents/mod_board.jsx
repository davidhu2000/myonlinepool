import React from 'react';
import PropTypes from 'prop-types';

import { ModBoardItem } from './';

class ModBoard extends React.Component {
  renderBulletins() {
    let { bulletins } = this.props;
    let bulletinIds = Object.keys(bulletins).reverse();

    return bulletinIds.map(id => (
      <ModBoardItem key={`bulletin-${id}`} bulletin={bulletins[id]} />
    ));
  }

  render() {
    return (
      <div className="modboard-box">
        <h2>Bulletins</h2>

        <div className="modboard-container-container">
          <div className="modboard-container">
            {this.renderBulletins()}
          </div>
        </div>

      </div>
    );
  }
}

ModBoard.propTypes = {
  bulletins: PropTypes.shape().isRequired
};

export { ModBoard };
