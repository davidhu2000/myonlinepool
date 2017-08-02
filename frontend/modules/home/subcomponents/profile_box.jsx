import React from 'react';
import autoBind from 'react-autobind';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

class ProfileBox extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  render() {
    return (
      <div className="profile-box">
        <div className="profile-box-top">
          <div className="profile-box-top-title">Profile</div>
        </div>
        <div className="profile-box-bottom">
          <div className="profile-box-bottom-left">
            <div className="top">
              <div className="label">Username</div>
              <div className="username">{this.props.user.name}</div>
            </div>
            <div className="bottom">
              <div className="label">Email</div>
              <div className="email">{this.props.user.email}</div>
            </div>
          </div>
          <div className="profile-box-bottom-right">
            <Link to={`/profile`}>
              <div className="button profile-edit-button">
                <i className="fa fa-angle-right" aria-hidden="true" />
                Edit Profile
              </div>
            </Link>
          </div>  
        </div>
      </div>
    );
  }
}

export { ProfileBox };
