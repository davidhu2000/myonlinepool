export const ERRORS = {
  RECEIVE: 'errors/RECEIVE_ERRORS',
  REMOVE: 'errors/REMOVE_ERROR',
  CLEAR: 'errors/CLEAR_ERRORS'
};

export const receiveErrors = errors => ({
  type: ERRORS.RECEIVE,
  errors
});

export const removeError = errorId => ({
  type: ERRORS.REMOVE,
  errorId
});

export const clearErrors = () => ({
  type: ERRORS.REMOVE
});
