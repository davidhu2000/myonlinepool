import React from 'react';
import PropTypes from 'prop-types';
import { PulseLoader } from 'react-spinners';

// amt=9.95
// cc=USD
// cm=poolIdentifer
// item_name=Choose%20Pool%20Size
// st=Completed
// tx=37K97484AP598031D

class PaymentConfirmation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    console.log(this.props)

    let { query } = this.props.location;
    let status = query.st;

    if (status === 'Completed') {
      let amountPaid = query.amt;
      let poolIdentifer = query.cm;
      let transactionNumber = query.tx;
    } else {
      let alert = {
        type: 'error',
        message: 'The payment is not processed properly. Please contact paypal.'
      };

      this.props.receiveAlert(alert);
    }
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
  receiveAlert: PropTypes.func.isRequired
};

export default PaymentConfirmation;
