import React from 'react';
import autoBind from 'react-autobind';

import { FormTextInput } from 'common/components';

class JoinForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      password: ''
    };

    autoBind(this);
  }

  update(type) {
    return e => {
      this.setState({ [type]: e.target.value });
    };
  }

  joinPool(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className="pool-join-form">
        <form className='join-form' onSubmit={this.joinPool} >
          <FormTextInput
            update={this.update}
            type='text'
            value={this.state.password}
            label="Title"
            field='title'
          />

          <FormTextInput
            update={this.update}
            type='text'
            value={this.state.password}
            label="Password"
            field="password"
          />

          <button>
            Submit
          </button>    
        </form>
      </div>
    );
  }


}

export default JoinForm;
