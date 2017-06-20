class Api::MessagesController < ApplicationController
  def index
    @messages = Message.find_by(pool_id: params[:pool_id])
  end

  def create
    @message = Message.new(message_params)
    @message.user_id = current_user.id 

    if @message.save
      render 'api/messages/show'
    else 
      render json: @message.errors.full_messages
    end
  end

  def update
    @message = Message.find_by(id: params[:id])
    
    if @message.update(message_params)
      render 'api/messages/show'
    else
      render json: @message.errors.full_messages
    end
  end

  def destroy
    @message = Message.find_by(id: params[:id])

    if @message.destroy
      render json: ['Message deleted.']
    else
      render json: ["Unable to delete message."], status: 422
    end
  end

  private 

  def message_params 
    params.require(:message).permit(:pool_id, :body)
  end
end
