class EvaluatePicksJob < ApplicationJob
  queue_as :default

  def perform(season, week)
    begin
      puts '=============================================='
      puts '=========EVALUATING PICKS JOB================='
      puts '=============================================='
      games = GameNfl.where(season: season, week: week, completed: true)
      picks = Pick.where(game_id: games, is_correct: 'pending')
      picks.each do |pick|
        game = games.find_by(id: pick.game_id)

        if pick.pick == ''
          pick.pick = 'away'
        end  

        if pick.pick == 'home' && game.home_score > game.away_score
          pick.is_correct = 'correct'
        elsif pick.pick == 'away' && game.away_score > game.home_score
          pick.is_correct = 'correct'
        else
          pick.is_correct = 'wrong'
        end
        pick.save
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
