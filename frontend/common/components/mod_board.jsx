import React from 'react';
import PropTypes from 'prop-types';

class ModBoard extends React.Component {
  renderAnnouncements() {
    let { announcements } = this.props;
    return announcements.map(announcement => (
      <div className="modboard-item" key={announcement.id}>
        <div className="message">{announcement.body}</div>
      </div>
    ));
  }

  render() {
    return (
      <div className="modboard-box">
        <div className="modboard-container">
          <div className="welcome">Welcome to MyOnlinePool!</div>
          {this.renderAnnouncements()}
        </div>
      </div>
    );
  }
}

ModBoard.propTypes = {
  title: PropTypes.string.isRequired,
  announcements: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    body: PropTypes.string,
    created_at: PropTypes.string,
    updated_at: PropTypes.string
  })).isRequired
};

export { ModBoard };
