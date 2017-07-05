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
      @pools = current_user.pools
      render 'api/pools/index'
    else 
      render json: membership.errors.full_messages, status: 422
    end
  end

  def destroy
    pool = Pool.find_by(id: params[:pool_id])

    unless pool.moderator_id == current_user.id || current_user.id == params[:user_id].to_i
      return render json: ['Only moderators are allowed to remove other members.'], status: 401
    end

    membership = Membership.find_by(pool_id: params[:pool_id], user_id: params[:user_id])
    membership.destroy if membership

    Pick.where(pool_id: params[:pool_id], user_id: params[:user_id]).destroy_all
    WeeklyResultNfl.where(pool_id: params[:pool_id], user_id: params[:user_id]).destroy_all

    # TODO: ask if this is desired effect? Or set up job to purge at certain times?
    if pool.members.count.zero?
      pool.destroy
    end

    if current_user.id == params[:user_id].to_i
      render json: ["You successfully left the pool."]
    else
      render json: ['Member successfully removed.']
    end
  end

  def update 
    membership = Membership.find_by(id: params[:membership_id])
    membership.paid = !membership.paid
    if membership.save
      puts "saved"
    else 
      render json: ['Could not update member']
    end 
  end 

  private 

  def membership_params 
    params.require(:membership).permit(:identifier, :password)
  end
end
