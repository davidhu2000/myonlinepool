class Api::BulletinsController < ApplicationController
  def index
    @bulletins = Bulletin.where(pool_id: params[:pool_id]).order(id: :desc).limit(5).offset(params[:offset] || 0)
  end

  def create
    @bulletin = Bulletin.new(bulletin_params)
    @bulletin.user_id = current_user.id 

    if @bulletin.save
      render 'api/bulletins/show'
    else 
      render json: @bulletin.errors.full_messages, status: 422
    end
  end

  def bulletin_params 
    params.require(:bulletin).permit(:pool_id, :body)
  end
end
