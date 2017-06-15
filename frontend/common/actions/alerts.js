export const ALERTS = {
  RECEIVE: 'alerts/RECEIVE_ALERTS',
  REMOVE: 'alerts/REMOVE_ALERT',
  CLEAR: 'alerts/CLEAR_ALERTS'
};

export const receiveAlerts = alerts => ({
  type: ALERTS.RECEIVE,
  alerts
});

export const removeAlert = alert => ({
  type: ALERTS.REMOVE,
  alert
});

export const clearAlerts = () => ({
  type: ALERTS.REMOVE
});
