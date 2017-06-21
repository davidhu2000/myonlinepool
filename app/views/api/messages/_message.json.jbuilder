json.set! message.id do 
  json.id message.id
  json.body message.body
  json.author message.user.name
  json.authorId message.user.id
  json.createdAt message.created_at
end