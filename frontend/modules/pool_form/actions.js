import { HOME } from 'common/actions';

import * as PoolFormAPI from './utils';

export const receivePool = pool => ({
  type: HOME.RECEIVE_MY_POOLS,
  pools: {
    [pool.id]: pool
  }
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
