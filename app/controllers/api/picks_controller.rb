require 'net/http'
require 'json'

class Api::PicksController < ApplicationController
  def index
    # TODO: only do this the first time picks are rendered.
    records = Team.calculate_team_records(2016)
    
    current_time = DateTime.parse(get_current_time["currentDateTime"])

    all_games = GameNfl.where(season: 2017, week: params[:week]).includes(:home, :away)
    raw_picks = current_user.picks.where(pool_id: params[:poolId], game_id: all_games)
    @picks = {}

    all_games.each do |game|
      @picks[game.id] = game.attributes
      @picks[game.id][:game_id] = game.id
      @picks[game.id][:home] = game.home.name.capitalize
      @picks[game.id][:away] = game.away.name.capitalize
      @picks[game.id][:pick] = ""
      @picks[game.id][:home_wins] = records[game.home_id][:wins]
      @picks[game.id][:home_losses] = records[game.home_id][:losses]
      @picks[game.id][:home_ties] = records[game.home_id][:ties]
      @picks[game.id][:away_wins] = records[game.away_id][:wins]
      @picks[game.id][:away_losses] = records[game.away_id][:losses]
      @picks[game.id][:away_ties] = records[game.away_id][:ties]
      @picks[game.id][:pick_locked] = game.start_time < current_time
    end
    raw_picks.each do |pick| 
      @picks[pick[:game_id]][:pick] = pick.pick 
    end
    @week = params[:week]
    render 'api/picks/index'
  end
  
  def create
    @picks = {}
    @week = nil
    current_time = DateTime.parse(get_current_time["currentDateTime"])

    params[:picks].each do |key, game|
      @week ||= game[:week]

      if current_time < GameNfl.find_by(id: game[:game_id]).start_time
        pick = Pick.find_or_initialize_by(
          user_id: current_user.id, 
          game_id: game[:game_id], 
          pool_id: game[:pool_id]
        )

        pick.pick = game[:pick]
        pick.save

        @picks[game[:game_id]] = { game_id: pick.game_id, pool_id: pick.pool_id, pick: pick.pick }
      else 
        return render json: ['Pick locked'], status: 422
      end
    end
    render 'api/picks/index'
  end

  private 

  def get_current_time
    url = 'http://worldclockapi.com/api/json/utc/now'
    uri = URI(url)
    JSON.parse(Net::HTTP.get(uri))
  end
end
