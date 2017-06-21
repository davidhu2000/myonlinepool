json.extract! pool, :id, :title, :description, :moderator_id, :league, :season
json.members do 
  pool.members.each do |member|
    json.set! member.id do 
      json.extract! member, :id, :name
    end
  end
end