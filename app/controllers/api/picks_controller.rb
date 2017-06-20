class Api::PicksController < ApplicationController
  def index 
    @picks = current_user.picks
  end
  
  def create
    @picks = params[:picks]
    @picks.each do |k, v| 
      puts @picks[k][:game_id] 
      
      Pick

    end 
  end

  private

  def pick_params
    params.require(:pick).permit(:user_id, :game_id, :pool_id, :pick)
  end
end
