require 'net/http'
require 'json'

class FetchTeamJob < ApplicationJob
  queue_as :default

  def perform(*args)
    puts '=============================================='
    puts '========FETCHING NFL TEAMS JOB================'
    puts '=============================================='

    url = "https://www.fantasyfootballnerd.com/service/nfl-teams/json/#{ENV['FB_NERD_API_KEY']}/"

    uri = URI(url)

    response = Net::HTTP.get(uri)

    teams = JSON.parse(response)["NFLTeams"]

    # Sample Response
    # {
    #   "code"=>"ARI", 
    #   "fullName"=>"Arizona Cardinals", 
    #   "shortName"=>"Arizona"
    # }

    teams.each do |team|
      abbreviation = team["code"].downcase
      full_name = team["fullName"]
      city = full_name.split(' ')[0..-2].join(' ').downcase
      name = full_name.split(' ').last.downcase
      t = Team.find_or_initialize_by(name: name, league: 'nfl')

      t.city = city
      t.abbreviation = abbreviation

      t.save!
    end

    puts '=============================================='
    puts '================JOB COMPLETED================='
    puts '=============================================='
  end
end
