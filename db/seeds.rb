require 'tty-progressbar'
require 'pastel'

mainAdminUser = User.new(
  name: 'Me Admin',
  email: "me@gmail.com",
  password: 'password',
  confirmed_at: Date.new
)
mainAdminUser.save!

puts 
puts
puts 'SEEDING ANOUNCEMENTS'
puts '-------------------------------------------------------------------------'
Announcement.create(title: "Manage Profile", body: "Change your user information by clicking the profile link in the dropdown")
Announcement.create(title: "Manage Pools", body: "Moderators can increase pool size with paypal")
Announcement.create(title: "Join Pools", body: "Once you've received a pool's id and password, use the Join Pool button")
Announcement.create(title: "Create Pools", body: "Click the Create Pool button to start a pool and invite players")

puts 
puts
puts 'SEEDING NFL TEAMS'
puts '-------------------------------------------------------------------------'

FetchTeamJob.perform_now

puts 
puts
puts 'SEEDING 2017 SCHEDULE'
puts '-------------------------------------------------------------------------'

puts 'seeding 2017 NFL schedule'
FetchNflScoresJob.perform_now(2017, (1..17).to_a)

# unless Rails.env.production?

#   pastel = Pastel.new
#   green = pastel.on_green(" ")
#   red = pastel.inverse(" ")

#   bar_total = 50
#   user_total = 20
#   pool_total = 5
#   announcement_total = 10
#   membership_total = 50
#   bulletin_total = 100
#   message_total = 200
#   pick_total = pool_total

#   puts 
#   puts
#   puts 'SEEDING 2016 SCHEDULE'
#   puts '-------------------------------------------------------------------------'

#   puts 'seeding 2016 NFL schedule'
#   FetchNflScoresJob.perform_now(2016, (1..22).to_a)

#   puts 
#   puts
#   puts 'SEEDING USERS'
#   puts '-------------------------------------------------------------------------'
#   progress_bar = TTY::ProgressBar.new('progress :bar :elapsed :percent', total: bar_total,complete: green, incomplete: red)

#   total = user_total


#   testUser = User.new(
#       name: 'Tester',
#       email: "Tester@gmail.com",
#       password: 'password',
#       confirmed_at: Date.new
#   )
#   testUser.save!

#   (total - 1).times do
#     User.create!(
#       name: Faker::Name.name,
#       email: Faker::Internet.email,
#       password: 'password',
#       confirmed_at: Date.today - rand(100).days
#     )

#     progress_bar.advance((1 / total.to_f) * bar_total)
#   end
#   progress_bar.current = 50
#   puts 
#   puts
#   puts 'SEEDING POOLS'
#   puts '-------------------------------------------------------------------------'
#   progress_bar = TTY::ProgressBar.new('progress :bar :elapsed :percent', total: bar_total,complete: green, incomplete: red)

#   total = pool_total

#   Pool.create!(
#     title: 'Test pool',
#     description: 'not a real pool',
#     buy_in: 1,
#     moderator_id: 1,
#     league: 'nfl',
#     season: 2017,
#     password: 'password',
#     password_digest: 'not-secure',
#     identifier: SecureRandom.urlsafe_base64(8)
#   )

#   Pool.create!(
#     title: 'Test pool 2',
#     description: 'not a real pool',
#     buy_in: 1,
#     moderator_id: 2,
#     league: 'nfl',
#     season: 2017,
#     password: 'password',
#     password_digest: 'not-secure',
#     identifier: SecureRandom.urlsafe_base64(8)
#   )

#   (total - 2).times do 
#     Pool.create!(
#       title: Faker::Superhero.name,
#       description: Faker::ChuckNorris.fact,
#       buy_in: rand(100),
#       moderator_id: rand(user_total) + 1,
#       league: 'nfl',
#       season: 2017,
#       password: 'password',
#       password_digest: 'not-secure',
#       identifier: SecureRandom.urlsafe_base64(8)
#     )
#     progress_bar.advance((1 / total.to_f) * bar_total)
#   end
#   progress_bar.current = 50


#   # progress_bar = TTY::ProgressBar.new('progress :bar :elapsed :percent', total: bar_total,complete: green, incomplete: red)
#   # total = announcement_total

#   # total.times do 
#   #   Announcement.create!(
#   #     title: Faker::Friends.character,
#   #     body: Faker::Friends.quote
#   #   )
#   #   progress_bar.advance((1 / total.to_f) * bar_total)
#   # end

#   puts 
#   puts
#   puts 'SEEDING MEMBERSHIPS'
#   puts '-------------------------------------------------------------------------'
#   progress_bar = TTY::ProgressBar.new('progress :bar :elapsed :percent', total: bar_total,complete: green, incomplete: red)

#   Membership.create(
#     user_id: 1,
#     pool_id: 1
#   )

#   total = membership_total - 1
#   total.times do
#     Membership.create(
#       user_id: rand(user_total) + 1,
#       pool_id: rand(pool_total) + 1
#     )
#     progress_bar.advance((1 / total.to_f) * bar_total)
#   end
#   progress_bar.current = 50
#   puts 
#   puts
#   puts 'SEEDING BULLETINS'
#   puts '-------------------------------------------------------------------------'
#   progress_bar = TTY::ProgressBar.new('progress :bar :elapsed :percent', total: bar_total,complete: green, incomplete: red)

#   total = bulletin_total
#   total.times do 
#     Bulletin.create!(
#       pool_id: rand(pool_total) + 1,
#       body: Faker::ChuckNorris.fact
#     )
#     progress_bar.advance((1 / total.to_f) * bar_total)
#   end
#   progress_bar.current = 50
#   puts 
#   puts
#   puts 'SEEDING MESSAGES'
#   puts '-------------------------------------------------------------------------'
#   progress_bar = TTY::ProgressBar.new('progress :bar :elapsed :percent', total: bar_total,complete: green, incomplete: red)

#   total = message_total

#   total.times do 
#     pool_id = rand(pool_total) + 1
#     user_id = Pool.find(pool_id).members.sample.id
#     Message.create!(
#       pool_id: pool_id,
#       user_id: user_id,
#       body: Faker::Friends.quote
#     )
#     progress_bar.advance((1 / total.to_f) * bar_total)
#   end
#   progress_bar.current = 50
#   puts 
#   puts
#   puts 'SEEDING PICKS'
#   puts '-------------------------------------------------------------------------'
#   progress_bar = TTY::ProgressBar.new('progress :bar :elapsed :percent', total: bar_total,complete: green, incomplete: red)
#   game_total = GameNfl.where(season: 2016).count
#   total = pick_total
#   (total).times do |i|
#     pool = Pool.find(i + 1)
#     users = pool.members

#     users.each do |user|
#       game_total.times do |j|
#         Pick.create(
#           pool_id: pool.id,
#           user_id: user.id,
#           game_id: j + 1,
#           pick: ['home', 'away'].sample
#         )
#         progress_bar.advance((1 / total.to_f / users.count / game_total) * bar_total)
#       end
#     end

#   end
#   progress_bar.current = 50

#   (1..22).each do |week|
#     puts
#     puts
#     puts "Evaluating week #{week} results"
#     EvaluatePicksJob.perform_now(2016, week)
#     puts
#     CalculateWeeklyResultsJob.perform_now(2016, week)
#   end

# end

# puts 
# puts
# puts '-------------------------------------------------------------------------'
# puts 'SEEDING COMPLETED'
# puts '-------------------------------------------------------------------------'