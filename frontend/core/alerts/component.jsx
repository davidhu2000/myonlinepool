import React from 'react';
import autoBind from 'react-autobind';
import PropTypes from 'prop-types';
import { difference } from 'lodash';
import AlertContainer from 'react-alert';

class Alerts extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);

    this.state = {
      offset: 65,
      position: 'top right',
      theme: 'dark',
      time: 5000,
      transition: 'scale'
    };

    this.messages = null;
  }

  componentDidMount() {
    if (this.props.alerts.length > 0) {
      this.props.alerts.forEach(alert => this.showAlert(alert));
    }
  }

  componentWillReceiveProps(newProps) {
    difference(newProps.alerts, this.props.alerts).forEach(alert => this.showAlert(alert));
  }

  showAlert(alert) {
    let icon = alert.type === 'error' ? 'fa-exclamation-triangle' : 'fa-check-circle';
    this.messages.show(alert.message, {
      time: 5000,
      type: alert.type,
      icon: <i className={`fa ${icon}`} />,
      onClose: () => this.props.removeAlert(alert)
    });
  }

  render() {
    return (
      <div className='alerts-container'>
        <AlertContainer ref={ac => { this.messages = ac; }} {...this.state} />
      </div>
    );
  }
}

Alerts.propTypes = {
  alerts: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string,
    message: PropTypes.string
  })).isRequired,
  removeAlert: PropTypes.func.isRequired
};

export default Alerts;
