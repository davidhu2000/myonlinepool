class Api::MembershipsController < ApplicationController
  def create 
    @pool = Pool.find_by(identifier: params[:membership][:identifier])

    unless @pool 
      render json: ["Cannot find pool with that identifier."], status: 404
      return
    end

    if @pool.valid_password?(params[:membership][:password])
      membership = Membership.new(user_id: current_user.id, pool_id: @pool.id)

      if membership.save
        render 'api/pools/show'
      else 
        render json: membership.errors.full_messages, status: 422
      end
      
    else 
      render json: ['Invalid password for this pool.'], status: 404
    end
  end

  def destroy
  end

  private 

  def membership_params 
    params.require(:membership).permit(:identifier, :password)
  end
end
