json.array! @pools.each do |pool|
  json.set! pool.identifier do 
    json.title pool.title
    json.id pool.id
  end
end