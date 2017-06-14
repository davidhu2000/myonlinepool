class Api::Auth::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])

    unless @user
      render json: ["Invalid username or password"], status: 401
    end

    unless @user.confirmed_at
      render json: ['Please confirm your email first.'], status: 401
    end

    if @user.sign_in_count >= @user.failed_attempts
      render json: ['You have made to many failed sign in attempts. Please reset your password'], status: 401 
    end

    login(@user)
    render 'api/users/show'

  end

  def destroy
    @user = current_user
    if @user
      logout
      head :ok
    else
      render json: ["No one is signed in"], status: 404
    end
  end

end
