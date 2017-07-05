require 'tty-progressbar'
require 'pastel'

pastel = Pastel.new
green = pastel.on_green(" ")
red = pastel.inverse(" ")

bar_total = 50
user_total = 20
pool_total = 5
announcement_total = 10
membership_total = 50
bulletin_total = 100
message_total = 200
pick_total = pool_total

puts 
puts
puts 'SEEDING NFL TEAMS'
puts '-------------------------------------------------------------------------'

FetchTeamJob.perform_now

puts 
puts
puts 'SEEDING SCHEDULE'
puts '-------------------------------------------------------------------------'

FetchNflScoresJob.perform_now(2016, (1..22).to_a)

FetchNflScoresJob.perform_now(2017, (1..17).to_a)

puts 
puts
puts 'SEEDING USERS'
puts '-------------------------------------------------------------------------'
progress_bar = TTY::ProgressBar.new('progress :bar :elapsed :percent', total: bar_total,complete: green, incomplete: red)

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
progress_bar = TTY::ProgressBar.new('progress :bar :elapsed :percent', total: bar_total,complete: green, incomplete: red)

total = pool_total

Pool.create!(
  title: 'Test pool',
  description: 'not a real pool',
  buy_in: 1,
  moderator_id: 1,
  league: 'nfl',
  season: 2017,
  password: 'password',
  password_digest: 'not-secure'
)

Pool.create!(
  title: 'Test pool 2',
  description: 'not a real pool',
  buy_in: 1,
  moderator_id: 2,
  league: 'nfl',
  season: 2017,
  password: 'password',
  password_digest: 'not-secure'
)

(total - 2).times do 
  Pool.create!(
    title: Faker::Superhero.name,
    description: Faker::ChuckNorris.fact,
    buy_in: rand(100),
    moderator_id: rand(user_total) + 1,
    league: 'nfl',
    season: 2017,
    password: 'password',
    password_digest: 'not-secure'
  )
  progress_bar.advance((1 / total.to_f) * bar_total)
end
progress_bar.current = 50
puts 
puts
puts 'SEEDING ANOUNCEMENTS'
puts '-------------------------------------------------------------------------'
progress_bar = TTY::ProgressBar.new('progress :bar :elapsed :percent', total: bar_total,complete: green, incomplete: red)
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
progress_bar = TTY::ProgressBar.new('progress :bar :elapsed :percent', total: bar_total,complete: green, incomplete: red)

Membership.create(
  user_id: 1,
  pool_id: 1
)

total = membership_total - 1
total.times do
  Membership.create(
    user_id: rand(user_total) + 1,
    pool_id: rand(pool_total) + 1
  )
  progress_bar.advance((1 / total.to_f) * bar_total)
end
progress_bar.current = 50
puts 
puts
puts 'SEEDING BULLETINS'
puts '-------------------------------------------------------------------------'
progress_bar = TTY::ProgressBar.new('progress :bar :elapsed :percent', total: bar_total,complete: green, incomplete: red)

total = bulletin_total
total.times do 
  Bulletin.create!(
    pool_id: rand(pool_total) + 1,
    body: Faker::ChuckNorris.fact
  )
  progress_bar.advance((1 / total.to_f) * bar_total)
end
progress_bar.current = 50
puts 
puts
puts 'SEEDING MESSAGES'
puts '-------------------------------------------------------------------------'
progress_bar = TTY::ProgressBar.new('progress :bar :elapsed :percent', total: bar_total,complete: green, incomplete: red)

total = message_total

total.times do 
  pool_id = rand(pool_total) + 1
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
progress_bar = TTY::ProgressBar.new('progress :bar :elapsed :percent', total: bar_total,complete: green, incomplete: red)
game_total = GameNfl.where(season: 2016).count
total = pick_total
(total).times do |i|
  pool = Pool.find(i + 1)
  users = pool.members

  users.each do |user|
    game_total.times do |j|
      Pick.create(
        pool_id: pool.id,
        user_id: user.id,
        game_id: j + 1,
        pick: ['home', 'away'].sample
      )
      progress_bar.advance((1 / total.to_f / users.count / game_total) * bar_total)
    end
  end

end
progress_bar.current = 50
puts 
puts
puts '-------------------------------------------------------------------------'
puts 'SEEDING COMPLETED'
puts '-------------------------------------------------------------------------'
