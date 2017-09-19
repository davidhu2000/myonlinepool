class Api::PicksController < ApplicationController
  def index
    current_time = get_current_time
    # TODO: make season, week dynamic
    all_games = GameNfl.where(season: 2017, week: params[:week]).includes(:home, :away)
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


    pool_picks = Pick.where(pool_id: params[:poolId], game_id: all_games)
    pool_players = Pool.find_by(id: params[:poolId]).members
    @picks_view = {}
    all_games.each do |game| 
      @picks_view[game.id] = game.attributes
      @picks_view[game.id][:home] = game.home.name.capitalize
      @picks_view[game.id][:away] = game.away.name.capitalize
      @picks_view[game.id][:pick_locked] = game.start_time < current_time
      @picks_view[game.id][:picks] = {}
        pool_players.each do |member|
          @picks_view[game.id][:picks][member.id] = {
            pick: "",
            picked: "",
            user_id: "",
            user_name: ""
          }
        end
    end  
    pool_picks.each do |pick| 
      @picks_view[pick.game_id][:picks][pick.user_id] = {}
      @picks_view[pick.game_id][:picks][pick.user_id][:pick] = pick.pick 
      if pick.pick == "home"
        @picks_view[pick.game_id][:picks][pick.user_id][:picked] = @picks_view[pick.game_id][:home]
      elsif pick.pick == "away"
        @picks_view[pick.game_id][:picks][pick.user_id][:picked] = @picks_view[pick.game_id][:away]
      end   
      @picks_view[pick.game_id][:picks][pick.user_id][:user_id] = pick.user_id
      @picks_view[pick.game_id][:picks][pick.user_id][:user_name] = User.find_by(id: pick.user_id).name
    end
    render 'api/picks/index'
  end
  
  def create
    @picks = {}
    @week = nil
    current_time = get_current_time
    pool = Pool.find_by(id: params[:picks].values.first[:pool_id])
     
    return render(json: ['Pool Locked'], status: 404) unless pool.payment_made

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
    render 'api/picks/show'
  end
end
