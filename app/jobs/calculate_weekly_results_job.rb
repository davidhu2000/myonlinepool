class CalculateWeeklyResultsJob < ApplicationJob
  queue_as :default

  def perform(season, week)
    puts '=============================================='
    puts '=========CALCULATE WEEKLY RESULTS JOB========='
    puts '=============================================='
    results = {}
    games = GameNfl.where(season: season, week: week, completed: true, evaluated: false)
    picks = Pick.where(game_id: games)

    WeeklyResultNfl.transaction do 

      picks.each do |pick|
        id = "#{pick.pool_id}-#{pick.user_id}"
        results[id] ||= WeeklyResultNfl.find_or_initialize_by(
          pool_id: pick.pool_id, 
          user_id: pick.user_id, 
          season: season, 
          week: week
        )

        results[id][:correct_picks] ||= 0

        if pick.is_correct == 'correct'
          results[id][:correct_picks] += 1 
        end
      end

      results.values.each(&:save)
      games.update_all(evaluated: true)

    end

    puts '=============================================='
    puts '=============================================='
    puts '=============================================='
  end
end
