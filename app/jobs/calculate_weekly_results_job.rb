class CalculateWeeklyResultsJob < ApplicationJob
  queue_as :default

  # GameNfl.update_all(evaluated: false); WeeklyResultNfl.destroy_all;

  def perform(season, week)
    puts '=============================================='
    puts '=========CALCULATE WEEKLY RESULTS JOB========='
    puts '=============================================='

    begin
      results = {}

      games = GameNfl.where(season: season, week: week)

      games = games.where(completed: true, evaluated: false)

      pools = Pool.all.includes(:members)

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
            results[id][:wrong_picks] ||= 0

            Pick.where(game_id: games, user_id: member.id, pool_id: pool.id).each do |pick|
              if pick.is_correct == 'correct'
                results[id][:correct_picks] += 1
              elsif pick.is_correct == 'wrong'
                results[id][:wrong_picks] += 1
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
    rescue ActiveRecord::RecordInvalid => invalid
      p 'Please try again.'
      p invalid
    end
  end
end
