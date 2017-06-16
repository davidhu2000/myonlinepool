export const fetchMyPools = () => (
  $.ajax({
    method: 'GET',
    url: 'api/pools'
  })
);
