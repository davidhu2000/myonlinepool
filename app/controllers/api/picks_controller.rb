class Api::PicksController < ApplicationController
  def index 
    @picks = current_user.picks
  end
  
  def create
    @picks = params[:picks]
    @picks.each do |k, v| 
      puts @picks[k][:game_id]
      pick = Pick.new({user_id: @picks[k][:user_id], game_id: @picks[k][:game_id], pool_id: @picks[k][:pool_id], pick: @picks[k][:pick]})
      if pick.save 
        puts "saved"
      else
        puts "failed"
      end  
    end 
  end

  private

  def pick_params
    params.require(:pick).permit(:user_id, :game_id, :pool_id, :pick)
  end
end
