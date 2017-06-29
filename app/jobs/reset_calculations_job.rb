class ResetCalculationsJob < ApplicationJob
  queue_as :default

  def perform(season, week)
    puts '=============================================='
    puts '========RESET CALCULATIONS JOB================'
    puts '=============================================='
    
    begin
      ActiveRecord::Base.transaction do
        WeeklyResultNfl.where(season: season, week: week).update_all(correct_picks: 0, wrong_picks: 0)
        games = GameNfl.where(season: season, week: week)
        games.update_all(evaluated: false)
        Pick.where(game_id: games).update_all(is_correct: 'pending')
      end
        puts '=============================================='
        puts '================JOB COMPLETED================='
        puts '=============================================='
    rescue ActiveRecord::RecordInvalid => invalid
      p 'Please try again.'
      p invalid
    end
  end
end
