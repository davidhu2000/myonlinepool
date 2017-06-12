import React from 'react';

export function withValidation(Component) {
  return class WithValidation extends React.Component {
    render() {
      return (
        <Component {...this.props} />
      );
    }
  };
}
