json.extract! pool, :id, :title, :description, :league, :season
json.buyIn pool.buy_in
json.maxSize pool.max_size
json.paymentMade pool.payment_made
json.moderatorId pool.moderator_id

json.members do 
  pool.memberships.each do |membership| 
    json.set! membership.user_id do 
      json.userId membership.user_id 
      json.paid membership.paid 
      json.name membership.user.name
      json.id membership.id
      json.email membership.user.email
    end 
  end 
end 
