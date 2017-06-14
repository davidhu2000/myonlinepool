class Api::Auth::PasswordsController < ApplicationController
  def create
    user = User.find_by(email: params[:user][:email])

    unless user 
      render json: ['Email does not exist.'], status: 404
      return
    end

    user.reset_password_token = generate_token
    user.reset_password_sent_at = Date.new

    if user.save
      AuthMailer.reset_password(user).deliver
      render json: ["Please check your email to confirm your account"]
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def password_params 
    params.require(:user).permit(:email, :password, :password_confirmation)
  end
end
