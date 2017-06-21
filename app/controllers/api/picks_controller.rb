class Api::PicksController < ApplicationController
  def index 
    all_games = GameNfl.where(season: 2016, week: params[:week]).includes(:home, :away)
    raw_picks = current_user.picks.where(pool_id: params[:poolId], game_id: all_games)
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

    # loop through picks 
    #   a = pick.find_by(all three things) 

    #   if a
    #     update 
    #   else 
    #     create 
    #     save  
    #   end 
    # end 


    if params[:type] == "all"
      all_games = GameNfl.where(season: 2016, week: params[:week])
      @picks = {}
      all_games.each do |game|
        pick = Pick.new({user_id: current_user.id, game_id: game.id, pool_id: params[:poolId], pick: "home"})
        pick.save!
        @picks[game.id] = game.attributes
        @picks[game.id][:game_id] = game.id
        @picks[game.id][:home] = game.home.name.capitalize
        @picks[game.id][:away] = game.away.name.capitalize
        @picks[game.id][:pick] = "home"
      end 
      @picks
      render 'api/picks/index'
    else
      game = GameNfl.find_by(id: params[:pick][:game_id])
      puts game
      pick = Pick.new({user_id: current_user.id, game_id: game.id, pool_id: params[:pick][:pool_id], pick: params[:pick][:pick]})
      pick.save!
      @picks = {}
      @picks[game.id] = game.attributes 
      @picks[game.id][:game_id] = game.id
      @picks[game.id][:home] = game.home.name.capitalize
      @picks[game.id][:away] = game.away.name.capitalize
      @picks[game.id][:pick] = params[:pick]
      @picks
      render 'api/picks/index'
    end    
  end

  private

  def pick_params
    params.require(:pick).permit(:user_id, :game_id, :pool_id, :pick)
  end
end
