let _defaultState = {
  name: "Alex",
  id: 1
};

const userReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    default:
      return state;
  }
};

export default userReducer;
