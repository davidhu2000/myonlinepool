import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router';
import Footer from './footer/footer';
import Navbar from './navbar/navbar';

class App extends React.Component {
  constructor(props){
    super(props);

    this.createNavbarTitle = this.createNavbarTitle.bind(this);
  }

  createNavbarTitle() {
    let location = this.props.location.pathname;
    return location;
  }

  render() {
    return(
    <div className="relative-content">
        <Navbar
          Title={ this.createNavbarTitle() }
          />
        <div className="app-container">
          { this.props.children }
        </div>
        <Footer/>
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
