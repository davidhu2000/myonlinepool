export const PREFS = {
  RECEIVE_PREFS: 'prefs/RECEIVE_PREFS'
};

export const receivePrefs = prefs => ({
  type: PREFS.RECEIVE_PREFS,
  prefs
});
