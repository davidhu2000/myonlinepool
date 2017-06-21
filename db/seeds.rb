require 'roo'

data = Roo::Spreadsheet.open('db/seed/seed.xlsx')

# seed a basic user
mainAdminUser = User.new(
    name: 'Me Admin',
    email: "me@gmail.com",
    password: 'password',
    confirmed_at: Date.new
)
mainAdminUser.save!

Pool.create!(
  title: 'Test pool',
  description: 'not a real pool',
  buy_in: 1,
  moderator_id: 1,
  league: 'nfl',
  season: 2017,
  password: 'password'
)

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

# seed picks 
# [1..16].each do |num|
#   Pick.create!(
#     user_id: 1,
#     pool_id: 1,
#     game_id: num,
#     pick: "home"
#   )
# end