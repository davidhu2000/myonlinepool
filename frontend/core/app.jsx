import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router';

class App extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <div>
        <h1>test</h1>
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
