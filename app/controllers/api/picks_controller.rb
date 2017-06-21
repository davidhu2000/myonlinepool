class Api::PicksController < ApplicationController
  def index 
    all_games = GameNfl.where(season: 2016, week: 1).includes(:home, :away)
    raw_picks = User.first.picks.where(pool_id: 1, game_id: all_games)
    pre_picks = {}
    # @picks = []
    all_games.each do |game|
      pre_picks[game.id] = game.attributes
      pre_picks[game.id][:game_id] = game.id
      pre_picks[game.id][:home] = game.home.name.capitalize
      pre_picks[game.id][:away] = game.away.name.capitalize
      pre_picks[game.id][:pick] = ""
    end 
    raw_picks.each do |pick| 
      pre_picks[pick[:game_id]][:pick] = pick.pick 
    end
    @picks = pre_picks
    render 'api/picks/index'    
  end
  
  def create
    raw_picks = params[:picks]
    @picks = []
    error_messages = []
    raw_picks.each do |k, v| 
      pick = Pick.new({user_id: raw_picks[k][:user_id], game_id: raw_picks[k][:game_id], pool_id: raw_picks[k][:pool_id], pick: raw_picks[k][:pick]})
      if pick.save 
        @picks << pick
      else
        error_messages += pick.errors.full_messages
      end 
    end 
    if error_messages.empty?
      render 'api/picks/index'
    else 
      render json: error_messages, status: 422
    end 
  end

  private

  def pick_params
    params.require(:pick).permit(:user_id, :game_id, :pool_id, :pick)
  end
end
