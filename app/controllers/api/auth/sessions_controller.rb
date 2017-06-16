class Api::Auth::SessionsController < ApplicationController
  def create
    @user = User.find_by(email: params[:user][:email])

    # check user with entered email exists
    unless @user
      render json: ["Invalid username or password"], status: 401
      return
    end

    # check that user has confirmed emails
    unless @user.confirmed_at
      render json: ['Please confirm your email first.'], status: 401
      return
    end

    # check if the user account is locked due to too many failed attempts.
    if @user.sign_in_count >= @user.failed_attempts
      render json: ['Too many failed sign in attempts. Please reset your password'], status: 401 
      return
    end

    # check password is valid
    unless @user.valid_password?(params[:user][:password])
      render json: ["Invalid username or password"], status: 401
      @user.sign_in_count += 1
      @user.save
      return
    end

    @user.sign_in_count = 0
    @user.save
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
