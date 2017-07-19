import React from 'react';
import autoBind from 'react-autobind';
import PropTypes from 'prop-types';

class MemberItem extends React.Component {
  constructor(props) {
    super(props);

    autoBind(this);
  }

  renderClass(paid) {
    if (paid) {
      return "fa fa-usd red";
    } else {
      return "fa fa-usd green";
    }
  }

  render() {
    return (
      <div className="pool-member">
        <button onClick={() => this.props.toggleMembership(this.props.member.userId, this.props.pool.id)}>
          <i className={this.renderClass(this.props.member.paid)} aria-hidden="true" />
        </button>
        <button onClick={() => this.props.removeMember(this.props.member.userId, this.props.pool.id)}>
          <i className="fa fa-times" aria-hidden="true" />
        </button>
        <span>{ this.props.member.name }</span>
      </div>
    );
  }

}

export { MemberItem };
