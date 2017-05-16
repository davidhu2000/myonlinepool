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
    return(
      <div classname="relative-content">
        <Navbar/>
        <h1>test</h1>
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
