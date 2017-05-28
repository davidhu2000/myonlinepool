require 'roo'

data = Roo::Spreadsheet.open('db/seed/seed.xlsx')

# seed the database with NFL team information
data.sheet('team_nfl').each_with_index do |team, idx|
  next if idx.zero?
  Team.create!(
    city: team[0].downcase, 
    name: team[1].downcase,
    abbreviation: team[2].downcase, 
    league: team[3].downcase
  )
end