export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";

export const sendMessage = message => dispatch => (
  dispatch(receiveMessage(message))
);

export const receiveMessage = (message) => ({
  type: RECEIVE_MESSAGE,
  message: message
})
