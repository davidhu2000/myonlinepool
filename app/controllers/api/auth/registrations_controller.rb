class Api::Auth::RegistrationsController < ApplicationController
  def create

    unless user_params[:password] == user_params[:password_confirmation]
      render json: ["Passwords do not match"], status: 422
      return
    end

    @user = User.new(user_params)
    @user.unconfirmed_email = user_params[:email]
    @user.confirmation_token = generate_token
    @user.confirmation_sent_at = Date.new

    if @user.save
      AuthMailer.confirm_email(@user).deliver
      render json: ["Please check your email to confirm your account"]
      return
    else
      render json: @user.errors.full_messages, status: 422
      return
    end
  end

  private 

    def user_params
      params.require(:user).permit(:name, :password, :email, :password_confirmation)
    end
end
