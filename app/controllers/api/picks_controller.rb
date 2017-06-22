class Api::PicksController < ApplicationController
  def index 
    all_games = GameNfl.where(season: 2016, week: params[:week]).includes(:home, :away)
    raw_picks = current_user.picks.where(pool_id: params[:poolId], game_id: all_games)
    @picks = {}

    all_games.each do |game|
      @picks[game.id] = game.attributes
      @picks[game.id][:game_id] = game.id
      @picks[game.id][:home] = game.home.name.capitalize
      @picks[game.id][:away] = game.away.name.capitalize
      @picks[game.id][:pick] = ""
    end 
    raw_picks.each do |pick| 
      @picks[pick[:game_id]][:pick] = pick.pick 
    end

    render 'api/picks/index'    
  end
  
  def create
    @picks = {}

    params[:picks].each do |key, game|

      prev_pick = Pick.find_by(user_id: current_user.id, game_id: game[:game_id], pool_id: game[:pool_id])
      if prev_pick 
        prev_pick.update(pick: game[:pick])
        @picks[game[:game_id]] = prev_pick
      else 
        new_pick = Pick.new({user_id: current_user.id, game_id: game[:game_id], pool_id: game[:pool_id], pick: game[:pick]})
        new_pick.save
        @picks[game[:game_id]] = new_pick
      end 
    end   

    render 'api/picks/index'
  end

  private

  # def pick_params
  #   params.require(:pick).permit(:game_id, :pool_id, :pick)
  # end
end
