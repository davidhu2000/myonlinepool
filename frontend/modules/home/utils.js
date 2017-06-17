export const fetchMyPools = () => (
  $.ajax({
    method: 'GET',
    url: 'api/pools'
  })
);

export const joinPool = identifier => (
  $.ajax({
    method: "POST",
    url: "api/",
    data: { pool: { identifier } }
  })
)