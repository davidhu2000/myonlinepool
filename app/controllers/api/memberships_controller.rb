class Api::MembershipsController < ApplicationController
  def create 
    @pool = Pool.find_by_credentials(
      identifier: params[:membership][:identifier],
      password: params[:membership][:password]
    )
    
    unless @pool 
      render json: ["Invalid identifier and password combination."], status: 404
      return
    end

    membership = Membership.new(user_id: current_user.id, pool_id: @pool.id)

    if membership.save
      render 'api/pools/show'
    else 
      render json: membership.errors.full_messages, status: 422
    end
  end

  def destroy
  end

  private 

  def membership_params 
    params.require(:membership).permit(:identifier, :password)
  end
end
