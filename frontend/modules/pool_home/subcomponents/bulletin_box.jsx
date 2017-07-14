import React from 'react';
import PropTypes from 'prop-types';

import { BulletinBoxItem } from './';

class BulletinBox extends React.Component {
  renderBulletins() {
    let { bulletins } = this.props;
    let bulletinIds = Object.keys(bulletins).reverse().slice(0, 4);

    return bulletinIds.map(id => (
      <BulletinBoxItem key={`bulletin-${id}`} bulletin={bulletins[id]} />
    ));
  }

  render() {
    return (
      <div className="bulletin-box">
        <h2>Bulletins</h2>
        <div className="bulletin-container">
          {this.renderBulletins()}
        </div>
      </div>
    );
  }
}

BulletinBox.propTypes = {
  bulletins: PropTypes.shape().isRequired
};

export { BulletinBox };
