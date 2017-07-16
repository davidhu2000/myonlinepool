import React from 'react';
import PropTypes from 'prop-types';
import { hashHistory } from 'react-router';
import { PulseLoader } from 'react-spinners';
import { confirmPayment } from './actions';

// amt=9.95
// cc=USD
// cm=poolIdentifer
// item_name=Choose%20Pool%20Size
// st=Completed
// tx=37K97484AP598031D

class PaymentConfirmation extends React.Component {
  componentDidMount() {
    let { query } = this.props.location;
    let status = query.st;
    let alert;
    if (status === 'Completed') {
      // amount paid is stored as cents in database to avoid decimals.
      let amountPaid = Number(query.amt) * 100;
      let identifier = query.cm;
      let transactionNumber = query.tx;
      let maxSize;

      switch (amountPaid) {
        case 1595:
          maxSize = 15;
          break;
        case 2595:
          maxSize = 1000;
          break;
        default:
          maxSize = 5;
      }

      let pool = {
        amountPaid,
        identifier,
        transactionNumber,
        maxSize
      };

      confirmPayment(pool);

      alert = {
        type: 'success',
        message: 'Payment successful!'
      };
    } else {
      alert = {
        type: 'error',
        message: 'Payment unsuccessful! Please contact paypal.'
      };
    }
    this.props.receiveAlerts([alert]);
    hashHistory.push('/home');
  }

  render() {
    return (
      <div>
        Confirming payment. Please wait.
        <PulseLoader color={'#1c1c1c'} />
      </div>
    );
  }
}

PaymentConfirmation.propTypes = {
  receiveAlerts: PropTypes.func.isRequired
};

export default PaymentConfirmation;
