import React from 'react';

export const DropdownHOC = props => WrappedComponent => {
  if (WrappedComponent) {
    return (
      <WrappedComponent {...props} />
    );
  } else {
    return null;
  }
};

