import { receiveAlerts } from 'common/actions';
import { processMessages } from 'helpers';

import * as HomeAPI from './utils';

export const HOME = {
  RECEIVE_MY_POOLS: 'home/RECEIVE_MY_POOLS',
  RECEIVE_ANNOUNCEMENTS: 'home/RECEIVE_ANNOUNCEMENTS',
  REMOVE_MY_POOL: 'home/REMOVE_MY_POOL'
};

export const receiveMyPools = pools => ({
  type: HOME.RECEIVE_MY_POOLS,
  pools
});

export const fetchMyPools = () => dispatch => (
  HomeAPI.fetchMyPools().then(
    res => dispatch(receiveMyPools(res)),
    err => dispatch(receiveAlerts(processMessages(err.responseJSON, err.status)))
  )
);

export const joinPool = (identifier, password) => dispatch => (
  HomeAPI.joinPool(identifier, password).then(
    res => dispatch(receiveMyPools(res)),
    err => dispatch(receiveAlerts(processMessages(err.responseJSON, err.status)))
  )
);

export const receiveAnnouncements = announcements => ({
  type: HOME.RECEIVE_ANNOUNCEMENTS,
  announcements
});

export const fetchAnnouncements = () => dispatch => (
  HomeAPI.fetchAnnouncements().then(
    res => dispatch(receiveAnnouncements(res)),
    err => dispatch(receiveAlerts(processMessages(err.responseJSON, err.status)))
  )
);
