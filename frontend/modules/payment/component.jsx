import React from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import { hashHistory } from 'react-router';

class Payment extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  componentWillMount() {
    if (!this.props.pool.identifier || !this.props.user.email) {
      hashHistory.replace('/');
    }
  }

  render() {
    let { pool, user } = this.props;
    return (
      <div>
        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top" onSubmit={this.updatePool}>
          <input type="hidden" name="cmd" value="_s-xclick" />
          <input type="hidden" name="hosted_button_id" value="YUJW7QP7S7TA2" />
          <table>
            <tr>
              <td>
                <input type="hidden" name="on0" value="Choose Pool Size" />
                Choose Pool Size
              </td>
            </tr>
            <tr>
              <td>
                <select name="os0">
                  <option value="1 to 5 Players">1 to 5 Players $9.95 USD</option>
                  <option value="6 to 15 Players">6 to 15 Players $15.95 USD</option>
                  <option value="16 to 25 Players">16 to 25 Players $25.95 USD</option>
                  <option value="25 to 45 Players">25 to 45 Players $39.95 USD</option>
                  <option value="46 to 65 Players">46 to 65 Players $59.95 USD</option>
                  <option value="66 to 85 Playesr">66 to 85 Playesr $79.95 USD</option>
                  <option value="86 to 99 Players">86 to 99 Players $95.95 USD</option>
                </select>
              </td>
            </tr>
          </table>
          <input type="hidden" name="custom" value={pool.identifier} />
          <input type="hidden" name="currency_code" value="USD" />
          <input type="hidden" name="return" value={`http://myonlinepool.herokuapp.com/payments?email=${user.email}&identifier=${pool.identifier}`} />
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
