require 'roo'

data = Roo::Spreadsheet.open('db/seed/seed.xlsx')

# seed a basic user
mainAdminUser = User.new(
    name: 'Me Admin',
    email: "me@gmail.com",
    password: 'password'
)
mainAdminUser.save!

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

# seed test schedule
data.sheet('test_schedule').each_with_index do |game, idx|
  next if idx.zero?
  p game
  GameNfl.create!(
    season: game[0],
    week: game[1],
    home_id: game[2],
    away_id: game[3],
    home_score: game[4],
    away_score: game[5],
    completed: game[6],
    start_time: game[7]
  )
end