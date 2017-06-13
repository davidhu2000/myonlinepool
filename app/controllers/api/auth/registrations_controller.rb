class Api::Auth::RegistrationsController < ApplicationController
  def create
    @user = User.new(user_params)
    @user.unconfirmed_email = user_params[:email]
    @user.confirmation_token = generate_token
    @user.confirmation_sent_at = Date.new

    if @user.save
      render json: ["Please check your email to confirm your account"]
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private 

    def user_params
      params.require(:user).permit(:name, :password, :email, :password_confirmation)
    end
end
