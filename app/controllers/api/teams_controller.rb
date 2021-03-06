class Api::TeamsController < ApplicationController
  def index
    # update to get team record using GameNfl and current week
    
    records = Team.calculate_team_records(2018)
    @teams = {}

    records.each do |k, v|
      v[:games_played] = v[:wins] + v[:losses] + v[:ties]
      @teams[k] = v
    end

    @teams
  end 
end
