class Api::PoolsController < ApplicationController
  def create
    @pool = Pool.new(pool_params)
    @pool.moderator_id = current_user.id
    @pool.league = 'nfl'

    if @pool.save
      render 'api/pools/show'
    else
      render json: @pool.errors.full_messages, status: 422
    end
  end

  def show 
    @pool = Pool.where(id: params[:id]).includes(:members).first
  end

  def update
    @pool = Pool.where(id: params[:id]).first
    if @pool.update(pool_params)
      render 'api/pools/show'
    else
      render json: @pool.errors.full_messages, status: 422
    end
  end

  def delete
    @pool = Pool.where(id: params[:id]).first
    if @pool 
      @pool.destroy
      render root_url
    else 
      render json: ['Pool does not exist'], status: 404
    end
  end

  private

  def pool_params
    params.require(:pool).permit(:title, :description, :buy_in, :league, :season, :password)
  end
end
