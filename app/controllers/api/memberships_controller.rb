class Api::MembershipsController < ApplicationController
  def create 
    @pool = Pool.find_by_credentials(
      params[:membership][:identifier],
      params[:membership][:password]
    )
    
    unless @pool 
      render json: ["Invalid identifier and password combination."], status: 404
      return
    end

    membership = Membership.new(user_id: current_user.id, pool_id: @pool.id)

    if membership.save
      render 'api/pools/index'
    else 
      render json: membership.errors.full_messages, status: 422
    end
  end

  def destroy
    pool = Pool.find_by(id: params[:pool_id])

    unless pool.moderator_id == current_user.id
      return render json: ['Only moderators are allowed to remove members.'], status: 401
    end

    membership = Membership.find_by(pool_id: params[:pool_id], user_id: params[:user_id])
    membership.destroy if membership

    picks = Pick.where(pool_id: params[:pool_id], user_id: [params[:user_id]])
    picks.each(&:destroy)

    render json: ['Member successfully removed']
  end

  private 

  def membership_params 
    params.require(:membership).permit(:identifier, :password)
  end
end
