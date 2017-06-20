class Api::PicksController < ApplicationController
  def index 
    @picks = current_user.picks
  end
  
  def create
    render json: params
  end

  private

  def pick_params
    params.require(:pick).permit(:user_id, :game_id, :pool_id, :pick)
  end
end
