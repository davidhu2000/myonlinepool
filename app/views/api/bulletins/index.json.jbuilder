@bulletins.each do |bulletin|
  json.partial! 'api/bulletins/bulletin', bulletin: bulletin
end