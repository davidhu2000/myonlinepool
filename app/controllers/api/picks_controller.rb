class Api::PicksController < ApplicationController
  def index
    current_time = get_current_time
    # TODO: make season, week dynamic
    all_games = GameNfl.where(season: 2016, week: params[:week]).includes(:home, :away)
    raw_picks = current_user.picks.where(pool_id: params[:poolId], game_id: all_games)
    @picks = {}

    all_games.each do |game|
      @picks[game.id] = game.attributes
      @picks[game.id][:game_id] = game.id
      @picks[game.id][:home] = game.home.name.capitalize
      @picks[game.id][:away] = game.away.name.capitalize
      @picks[game.id][:pick] = ""
      @picks[game.id][:home_record] = game.home_record
      @picks[game.id][:away_record] = game.away_record
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
    current_time = get_current_time

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
end
