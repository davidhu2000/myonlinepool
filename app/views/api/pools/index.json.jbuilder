@pools.each do |pool|
  json.set! pool.id do 
    json.extract! pool, :id, :title, :identifier, :moderator_id
  end
end