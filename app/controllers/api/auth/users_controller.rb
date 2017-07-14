class Api::Auth::UsersController < ApplicationController
  def update 
    @user = User.find_by(id: params[:user_id])
    @user[:email] = params[:email]
    @user.save
    render 'api/users/show'
  end  
end
