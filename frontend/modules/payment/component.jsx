import React from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';

class Payment extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);

    this.state = {
      amountPaid: null,
      maxSize: null
    };
  }

  update(e) {
    let amountPaid = null;
    let maxSize = null;

    switch (e.target.value) {
      case "5 or less people":
        amountPaid = 995;
        maxSize = 5;
        break;
      case "15 or less people":
        amountPaid = 1595;
        maxSize = 15;
        break;
      case "more than 15 people":
        amountPaid = 2595;
        maxSize = 1000;
        break;
      default:
        return;
    }

    this.setState({
      amountPaid,
      maxSize
    });
  }

  render() {
    let { pool, user } = this.props;
    console.log(this.state);
    return (
      <div>
        <form action="https://www.sandbox.paypal.com/cgi-bin/webscr" method="post" target="_top">
          <input type="hidden" name="cmd" value="_s-xclick" />
          <input type="hidden" name="hosted_button_id" value="Q9PZ2TVVXM9QC" />
          <table>
            <tbody>
              <tr>
                <td>
                  <input type="hidden" name="on0" value="Choose Pool Size" />
                  Choose Pool Size
                </td>
              </tr>
              <tr>
                <td>
                  <select name="os0" onChange={this.update}>
                    <option value="5 or less people">{"5 or less people $9.95 USD"}</option>
                    <option value="15 or less people">{"15 or less people $15.95 USD"}</option>
                    <option value="more than 15 people">{"more than 15 people $25.95 USD"}</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
          <input type="hidden" name="currency_code" value="USD" />
          <input type="hidden" name="return" value={`http://localhost:3000/payments?email=${user.email}&identifier=${pool.identifier}`} />
          <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_paynowCC_LG.gif" name="submit" alt="PayPal - The safer, easier way to pay online!" />
          <img alt="" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
        </form>
      </div>
    );
  }
}

Payment.propTypes = {
  pool: PropTypes.shape().isRequired,
  user: PropTypes.shape().isRequired
};

export default Payment;
