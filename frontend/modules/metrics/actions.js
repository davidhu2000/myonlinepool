import * as APIUtil from './utils';

export const TEAM = {
  RECEIVE: 'team/RECEIVE'
};

export const receiveTeams = teams => ({
  type: TEAM.RECEIVE,
  teams
});

export const fetchTeams = () => dispatch => (
  APIUtil.fetchTeams().then(
    res => dispatch(receiveTeams(res))
  )
);

