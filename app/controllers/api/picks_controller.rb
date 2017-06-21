class Api::PicksController < ApplicationController
  def index 
    @picks = current_user.picks
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
