class Api::Auth::PasswordsController < ApplicationController
  before_action :find_user
  # create reset password token, and send email
  def create

    @user.reset_password_token = generate_token
    @user.reset_password_sent_at = Date.new

    if @user.save
      AuthMailer.reset_password(@user).deliver
      render json: ["Please check your email to confirm your account"]
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  # create new password
  def update
    p params
    if @user.reset_password_token == params[:user][:reset_password_token]
      if @user.update_password(params[:user][:password], params[:user][:password_confirmation])
        render json: ["Password successfully reset. Please sign in now."]
      else 
        render json: @user.errors.full_messages, status: 422
      end
    else 
      render json: ["Code is invalid."], status: 422
    end
  end

  private

  def password_params 
    params.require(:user).permit(:email, :password, :password_confirmation, :reset_password_token)
  end

  def find_user
    @user = User.find_by(email: params[:user][:email])

    unless @user 
      render json: ['User with that email does not exist.'], status: 404
      return
    end
  end
end
