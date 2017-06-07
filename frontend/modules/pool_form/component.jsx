import React from 'react';
import autoBind from 'react-autobind';

class PoolForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      buy_in: 0,
      season: 2017,
      league: 'nfl'
    };

    autoBind(this);
  }

  render() {
    return (
      <div className='pool-form'>
        <form>
          
        </form>
      </div>
    );
  }
}

export default PoolForm;
