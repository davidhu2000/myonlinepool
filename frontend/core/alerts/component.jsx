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
    this.messages.show(alert, {
      time: 5000,
      type: 'error',
      icon: <i className='fa fa-exclamation-triangle' />,
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
  alerts: PropTypes.arrayOf(PropTypes.string).isRequired,
  removeAlert: PropTypes.func.isRequired
};

export default Alerts;
