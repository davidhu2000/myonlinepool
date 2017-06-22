require 'roo'
require 'tty-progressbar'
require 'pastel'

pastel = Pastel.new
green = pastel.on_green(" ")
red = pastel.inverse(" ")

bar_total = 50
user_total = 100
pool_total = 21
announcement_total = 10
membership_total = 400
bulletin_total = 100
message_total = 1000
pick_total = 200

data = Roo::Spreadsheet.open('db/seed/seed.xlsx')

puts 
puts
puts 'SEEDING NFL TEAMS'
puts '-------------------------------------------------------------------------'
progress_bar = TTY::ProgressBar.new('progress [:bar] :elapsed :percent', total: bar_total,complete: green, incomplete: red)

team_data = data.sheet('team_nfl')
total = team_data.to_a.length - 1

team_data.each_with_index do |team, idx|
  next if idx.zero?
  Team.create!(
    city: team[0].downcase, 
    name: team[1].downcase,
    abbreviation: team[2].downcase, 
    league: team[3].downcase
  )
  progress_bar.advance((1 / total.to_f) * bar_total)
end
progress_bar.current = 50
puts 
puts
puts 'SEEDING SCHEDULE'
puts '-------------------------------------------------------------------------'
progress_bar = TTY::ProgressBar.new('progress [:bar] :elapsed :percent', total: bar_total,complete: green, incomplete: red)

schedule = data.sheet('test_schedule')
total = schedule.to_a.length - 1
schedule.each_with_index do |game, idx|
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

  progress_bar.advance((1 / total.to_f) * bar_total)
end
progress_bar.current = 50
puts 
puts
puts 'SEEDING USERS'
puts '-------------------------------------------------------------------------'
progress_bar = TTY::ProgressBar.new('progress [:bar] :elapsed :percent', total: bar_total,complete: green, incomplete: red)

total = user_total

mainAdminUser = User.new(
    name: 'Me Admin',
    email: "me@gmail.com",
    password: 'password',
    confirmed_at: Date.new
)
mainAdminUser.save!

(total - 1).times do
  User.create!(
    name: Faker::Name.name,
    email: Faker::Internet.email,
    password: 'password',
    confirmed_at: Date.today - rand(100).days
  )

  progress_bar.advance((1 / total.to_f) * bar_total)
end
progress_bar.current = 50
puts 
puts
puts 'SEEDING POOLS'
puts '-------------------------------------------------------------------------'
progress_bar = TTY::ProgressBar.new('progress [:bar] :elapsed :percent', total: bar_total,complete: green, incomplete: red)

total = pool_total

Pool.create!(
  title: 'Test pool',
  description: 'not a real pool',
  buy_in: 1,
  moderator_id: 1,
  league: 'nfl',
  season: 2017,
  password: 'password'
)

(total - 1).times do 
  Pool.create!(
    title: Faker::Superhero.name,
    description: Faker::ChuckNorris.fact,
    buy_in: rand(100),
    moderator_id: rand(100) + 1,
    league: 'nfl',
    season: 2017,
    password: 'password'
  )
  progress_bar.advance((1 / total.to_f) * bar_total)
end
progress_bar.current = 50
puts 
puts
puts 'SEEDING ANOUNCEMENTS'
puts '-------------------------------------------------------------------------'
progress_bar = TTY::ProgressBar.new('progress [:bar] :elapsed :percent', total: bar_total,complete: green, incomplete: red)
total = announcement_total

total.times do 
  Announcement.create!(
    title: Faker::Friends.character,
    body: Faker::Friends.quote
  )
  progress_bar.advance((1 / total.to_f) * bar_total)
end

puts 
puts
puts 'SEEDING MEMBERSHIPS'
puts '-------------------------------------------------------------------------'
progress_bar = TTY::ProgressBar.new('progress [:bar] :elapsed :percent', total: bar_total,complete: green, incomplete: red)

total = membership_total
total.times do
  Membership.create(
    user_id: rand(100) + 1,
    pool_id: rand(21) + 1
  )
  progress_bar.advance((1 / total.to_f) * bar_total)
end
progress_bar.current = 50
puts 
puts
puts 'SEEDING BULLETINS'
puts '-------------------------------------------------------------------------'
progress_bar = TTY::ProgressBar.new('progress [:bar] :elapsed :percent', total: bar_total,complete: green, incomplete: red)

total = bulletin_total
total.times do 
  Bulletin.create!(
    pool_id: rand(21) + 1,
    body: Faker::ChuckNorris.fact
  )
  progress_bar.advance((1 / total.to_f) * bar_total)
end
progress_bar.current = 50
puts 
puts
puts 'SEEDING MESSAGES'
puts '-------------------------------------------------------------------------'
progress_bar = TTY::ProgressBar.new('progress [:bar] :elapsed :percent', total: bar_total,complete: green, incomplete: red)

total = message_total

total.times do 
  pool_id = rand(21) + 1
  user_id = Pool.find(pool_id).members.sample.id
  Message.create!(
    pool_id: pool_id,
    user_id: user_id,
    body: Faker::Friends.quote
  )
  progress_bar.advance((1 / total.to_f) * bar_total)
end
progress_bar.current = 50
puts 
puts
puts 'SEEDING PICKS'
puts '-------------------------------------------------------------------------'
progress_bar = TTY::ProgressBar.new('progress [:bar] :elapsed :percent', total: bar_total,complete: green, incomplete: red)

total = pick_total
(total).times do |i|
  pool = Pool.find(i % 21 + 1)
  user = pool.members.sample

  16.times do 
    Pick.create(
      pool_id: pool.id,
      user_id: user.id,
      game_id: rand(16) + 1,
      pick: ['home', 'away'].sample
    )
  end
  progress_bar.advance((1 / total.to_f) * bar_total)
end
progress_bar.current = 50
puts 
puts
puts '-------------------------------------------------------------------------'
puts 'SEEDING COMPLETED'
puts '-------------------------------------------------------------------------'