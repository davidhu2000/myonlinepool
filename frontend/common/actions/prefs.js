export const PREFS = {
  RECEIVE_PREFS: 'prefs/RECEIVE_PREFS',
  UPDATE_PREFS: 'prefs/UPDATE_PREFS'
};

export const receivePrefs = prefs => ({
  type: PREFS.RECEIVE_PREFS,
  prefs
});

export const receiveUpdates = prefs => ({
  type: PREFS.UPDATE_PREFS,
  prefs
});
