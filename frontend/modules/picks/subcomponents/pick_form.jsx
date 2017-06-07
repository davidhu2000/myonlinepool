import React from 'react';
import { Link, withRouter } from 'react-router';

class PickForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.Game.id,
      home: this.props.Game.home,
      away: this.props.Game.away,
      pick: ""
    }

    this.submitPick = this.submitPick.bind(this);
  }

  submitPick(e) {
    e.preventDefault();
    console.log(e.target.value);
  }

  update(field) {
    return e => {
      this.setState({
        [field]: e.target.value
      });
    };
  }

  render() {
    return (
      <form onSubmit={ this.submitPick } className="selection-item">
        <label>
          <button type="submit"
                  name="home"
                  value="home" />
          <img src={`assets/logos/${this.props.Game.home}.gif`} />
        </label>
        <div>At</div>
        <label>
          <button type="submit"
                  name="away"
                  value="away" />
          <img src={`assets/logos/${this.props.Game.away}.gif`} />
        </label>
      </form>
    );
  }
}

export default PickForm;
