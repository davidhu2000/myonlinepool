json.extract! pool, :id, :title, :description, :league, :season, :identifier, :password
json.buyIn pool.buy_in
json.maxSize pool.max_size
json.paymentMade pool.payment_made
json.moderatorId pool.moderator_id
json.members do 
  pool.members.each do |member|
    json.set! member.id do 
      json.extract! member, :id, :name
    end
  end
end
