require 'net/http'
require 'json'

class FetchScheduleJob < ApplicationJob
  queue_as :default

  def perform(*args)
    url = "https://www.fantasyfootballnerd.com/service/schedule/json/#{ENV['FB_NERD_API_KEY']}/"

    uri = URI(url)

    response = Net::HTTP.get(uri)

    teams = {}

    Team.where(league: 'nfl').each do |team|
      teams[team.abbreviation] = team.id
    end
    
    p teams
    gets

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

    season = 2017

    schedule.each do |game|
      p home = teams.find_by(abbreviation: game["homeTeam"].downcase).name
      p away = teams.find_by(abbreviation: game["awayTeam"].downcase).name
      p home_id = teams.find_by(abbreviation: game["homeTeam"].downcase).id
      p away_id = teams.find_by(abbreviation: game["awayTeam"].downcase).id

      start_time = Time.parse("#{game["gameDate"]} #{game["gameTimeET"]} EDT").utc
      gets
    end
  end
end
