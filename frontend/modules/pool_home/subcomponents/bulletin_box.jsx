import React from 'react';
import PropTypes from 'prop-types';

import { BulletinBoxItem } from './';

class BulletinBox extends React.Component {
  renderBulletins() {
    let { bulletins } = this.props;
    let bulletinIds = Object.keys(bulletins).reverse().slice(0, 1);

    return bulletinIds.map(id => (
      <BulletinBoxItem key={`bulletin-${id}`} bulletin={bulletins[id]} />
    ));
  }

  render() {
    return (
      <div className="bulletin-box">
        <div className="bulletin-header">
          <h2>Pool: {this.props.title}</h2>
          <h2>Buy In: ${this.props.buyIn}</h2>
          <h2>Moderator: {this.props.moderatorName}</h2>
          <button onClick={() => this.props.sendInvite({ username: "Alex", email: "asherman.ca@gmail.com", id: "1", password: "password" })}>
            Invite Member
          </button>
        </div>
        <div className="bulletin-container">
          {this.renderBulletins()}
        </div>
      </div>
    );
  }
}

BulletinBox.propTypes = {
  bulletins: PropTypes.shape().isRequired,
  title: PropTypes.string.isRequired,
  buyIn: PropTypes.number.isRequired,
  moderatorName: PropTypes.string.isRequired,
  sendInvite: PropTypes.func.isRequired
};

export { BulletinBox };
