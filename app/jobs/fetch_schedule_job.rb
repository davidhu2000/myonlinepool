require 'net/http'
require 'json'

class FetchScheduleJob < ApplicationJob
  queue_as :default

  def perform(season)
    begin
      puts '=============================================='
      puts '=======FETCHING NFL SCHEDULE JOB=============='
      puts '=============================================='

      url = "https://www.fantasyfootballnerd.com/service/schedule/json/#{ENV['FB_NERD_API_KEY']}/"

      uri = URI(url)

      response = Net::HTTP.get(uri)

      teams = {}

      Team.where(league: 'nfl').each do |team|
        teams[team.abbreviation] = team.id
      end

      schedule = JSON.parse(response)["Schedule"]

      # Sample response 
      # {
      #   "gameId"=>"1", 
      #   "gameWeek"=>"1", 
      #   "gameDate"=>"2017-09-07", 
      #   "awayTeam"=>"KC", 
      #   "homeTeam"=>"NE", 
      #   "gameTimeET"=>"8:30 PM", 
      #   "tvStation"=>"NBC", 
      #   "winner"=>""
      # }

      schedule.each do |game|
        home_id = teams[game["homeTeam"].downcase]
        away_id = teams[game["awayTeam"].downcase]

        start_time = Time.parse("#{game["gameDate"]} #{game["gameTimeET"]} EDT").utc

        g = GameNfl.find_or_initialize_by(
          home_id: home_id,
          away_id: away_id,
          season: season
        )

        g.start_time = start_time

        g.save!
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
