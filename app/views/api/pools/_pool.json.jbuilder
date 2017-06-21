json.extract! pool, :id, :title, :description, :league, :season
json.moderatorId pool.moderator_id
json.members do 
  pool.members.each do |member|
    json.set! member.id do 
      json.extract! member, :id, :name
    end
  end
end