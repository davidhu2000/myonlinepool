json.set! message.id do 
  json.id message.id
  json.body message.body
  json.auther message.user.name
  json.created_at message.created_at
end