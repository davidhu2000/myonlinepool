import * as PoolFormAPI from './utils';

export const RECEIVE_POOL = 'RECEIVE_POOL';

export const receivePool = pool => ({
  type: RECEIVE_POOL,
  pool
});

export const createPool = pool => dispatch => (
  PoolFormAPI.createPool(pool).then(
    res => {
      dispatch(receivePool(res));
      return res.id;
    },
    err => console.log(err)
  )
);
