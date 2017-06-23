class CalculateWeeklyResultsJob < ApplicationJob
  queue_as :default

  def perform(season, week)
    puts '=============================================='
    puts '=========CALCULATE WEEKLY RESULTS JOB========='
    puts '=============================================='
    results = {}
    games = GameNfl.where(season: season, week: week, completed: true)
    picks = Pick.where(game_id: games)

    picks.each do |pick|
      results[pick.user_id] ||= { 
        user_id: pick.user_id,
        pool_id: pick.pool_id,
        week: week,
        season: season,
        correct_picks: 0
      }

      results[pick.user_id][:correct_picks] += 1 if pick.is_correct == 'correct'
    end
    
    WeeklyResultNfl.create(results.values)

    puts '=============================================='
    puts '=============================================='
    puts '=============================================='
  end
end
