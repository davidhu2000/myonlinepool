json.set! message.created_at do 
  json.id message.id
  json.body message.body
  json.auther message.user.name
end