class CalculateWeeklyResultsJob < ApplicationJob
  queue_as :default

  # GameNfl.update_all(evaluated: false); WeeklyResultNfl.destroy_all;

  def perform(season, week)
    puts '=============================================='
    puts '=========CALCULATE WEEKLY RESULTS JOB========='
    puts '=============================================='
    results = {}

    games = GameNfl.where(season: season, week: week)

    total = games.count

    games = games.where(completed: true, evaluated: false)
    # picks = Pick.where(game_id: games)

    pools = Pool.all.includes(:members, :picks)

    WeeklyResultNfl.transaction do 
      pools.each do |pool|
        pool.members.each do |member|
          id = "#{pool.id}-#{member.id}"
          results[id] ||= WeeklyResultNfl.find_or_initialize_by(
            pool_id: pool.id, 
            user_id: member.id, 
            season: season, 
            week: week
          )

          results[id][:correct_picks] ||= 0
          results[id][:wrong_picks] ||= total

          Pick.where(game_id: games, user_id: member.id, pool_id: pool.id).each do |pick|
            if pick.is_correct == 'correct'
              results[id][:correct_picks] += 1 
              results[id][:wrong_picks] -= 1
            end
          end
        end
      end

      results.values.each(&:save)
      games.update_all(evaluated: true)

    end

    puts '=============================================='
    puts '================JOB COMPLETED================='
    puts '=============================================='
  end
end
