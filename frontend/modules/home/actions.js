export const HOME = {
  RECEIVE_MY_POOLS: 'home/RECEVIE_MY_POOLS'
};

export const receiveMyPools = pools => ({
  type: HOME.RECEIVE_MY_POOLS,
  pools
});
