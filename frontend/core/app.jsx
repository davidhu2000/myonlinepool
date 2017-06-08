import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router';
import Footer from './footer/footer';
import Navbar from './navbar/navbar';

class App extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="base-wrapper">
        <div className="base-container">
          <Navbar
            Location={this.props.location.pathname}
            PoolId={this.props.params.poolId}
          />
          <div className="app-container">
            { this.props.children }
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(App));
