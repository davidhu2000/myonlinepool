import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <div className="footer">
      <div className="copyright">
        Copyright <i className="fa fa-copyright" aria-hidden="true" />
        2007-2017 MyOnlinePool.com. All Rights Reserved.
      </div>
      <div className="links">
        <div>
          myonlinepool.contact@gmail.com
        </div>
        <div className="internals">
          <div className="internal-link">
            <Link to={'/faq'}>
              FAQs
            </Link>
          </div>
          <div className="internal-link">
            <Link to={'/pricing'}>
              Pricing
            </Link>
          </div>
        </div>
      </div>
      <div className="social">
        <a href="www.facebook.com">
          <i className="fa fa-facebook fa-2x" aria-hidden="true" />
        </a>
        <i className="fa fa-twitter fa-2x" aria-hidden="true" />
        <i className="fa fa-instagram fa-2x" aria-hidden="true" />
      </div>
    </div>
  );
};

Footer.propTypes = {
  data: PropTypes.shape().isRequired
};

export { Footer };
