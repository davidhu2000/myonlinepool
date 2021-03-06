json.partial! 'api/pools/pool', pool: @pool
json.locked @locked
json.identifier @pool.identifier
json.password @pool.password
json.moderatorName @moderator_name

json.standings do
  @standings.each do |week, pool_standings|
    
    json.set! week do
      pool_standings.each do |member_id, res|
        json.set! member_id do 
          json.week res.week
          json.season res.season
          json.correctPicks res.correct_picks
          json.wrongPicks res.wrong_picks
          json.userId res.user_id
        end
      end
    end
  end
end