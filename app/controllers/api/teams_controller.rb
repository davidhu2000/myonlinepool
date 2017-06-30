class Api::TeamsController < ApplicationController
  def index
    records = Team.calculate_team_records(2016)
    @teams = {}

    records.each do |k, v|
      @teams[k] = v
    end   

    @teams
  end 
end
