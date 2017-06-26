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
      @picks[game.id][:home_wins] = 0 
      @picks[game.id][:home_losses] = 0
      @picks[game.id][:away_wins] = 0 
      @picks[game.id][:away_losses] = 0

      all_games = GameNfl.where(season: 2016, completed: 'true')
      all_games.each do |home_team_game| 
        if game[:home_id] == home_team_game[:home_id] || game[:home_id] == home_team_game[:away_id]
          if game[:home_id] == home_team_game[:home_id]
            if home_team_game.home_score > home_team_game.away_score 
              @picks[game.id][:home_wins] += 1 
            else 
              @picks[game.id][:home_losses] += 1
            end 
          else 
            if home_team_game.away_score > home_team_game.home_score 
              @picks[game.id][:home_wins] += 1 
            else 
              @picks[game.id][:home_losses] += 1
            end 
          end     
        end
      end

      all_games.each do |away_team_game| 
        if game[:away_id] == away_team_game[:home_id] || game[:away_id] == away_team_game[:away_id]
          if game[:away_id] == away_team_game[:home_id]
            if away_team_game.home_score > away_team_game.away_score 
              @picks[game.id][:away_wins] += 1 
            else 
              @picks[game.id][:away_losses] += 1
            end 
          else 
            if away_team_game.away_score > away_team_game.home_score 
              @picks[game.id][:away_wins] += 1 
            else 
              @picks[game.id][:away_losses] += 1
            end 
          end     
        end
      end        
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
    params[:picks].each do |key, game|
      @week ||= game[:week]
      pick = Pick.find_by(user_id: current_user.id, game_id: game[:game_id], pool_id: game[:pool_id])
      if pick 
        pick.update(pick: game[:pick])
      else 
        pick = Pick.new({user_id: current_user.id, game_id: game[:game_id], pool_id: game[:pool_id], pick: game[:pick]})
        pick.save
      end 
      @picks[game[:game_id]] = { game_id: pick.game_id, pool_id: pick.pool_id, pick: pick.pick }
    end
    render 'api/picks/index'
  end
end
