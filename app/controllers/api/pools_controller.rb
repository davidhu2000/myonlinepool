class Api::PoolsController < ApplicationController
  before_action :require_membership_to_access, only: [:show]
  before_action :require_moderator, only: [:update, :destroy]

  def index 
    @pools = current_user.pools
  end
  
  def create
    @pool = Pool.new(pool_params)
    @pool.moderator_id = current_user.id

    @pool.memberships.new(user_id: current_user.id)

    if @pool.save
      render 'api/pools/show'
    else
      render json: @pool.errors.full_messages, status: 422
    end
  end

  def show
    @pool =  Pool.where(id: params[:id]).includes(:members, :weekly_result_nfls).first
    @standings = {}

    @pool.weekly_result_nfls.each do |res|
      @standings[res.week] ||= {}
      @standings[res.week][res.user_id] = res
    end
  end

  def update
    @pool = Pool.where(id: params[:id]).first
    if @pool.update(pool_params)
      render 'api/pools/show'
    else
      render json: @pool.errors.full_messages, status: 422
    end
  end

  def destroy
    @pool = Pool.where(id: params[:id]).first
    if @pool 
      @pool.destroy
      head :ok
    else 
      render json: ['Pool does not exist'], status: 404
    end
  end

  private

  def pool_params
    params.require(:pool).permit(:title, :description, :buy_in, :league, :season, :password)
  end

  def require_membership_to_access
    @pool = Pool.where(id: params[:id]).includes(:members).first

    unless @pool.members.include?(current_user)
      return render json: ['You need to be a member of this pool.'], status: 401
    end
  end

  def require_moderator
    @pool = Pool.where(id: params[:id]).first

    unless @pool.moderator_id == current_user.id
      return render json: ['You need to be the moderator for access.'], status: 401
    end
  end
end
