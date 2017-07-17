class Api::Auth::UsersController < ApplicationController
  def update 
    @user = User.find_by(id: params[:user_id])
    if params[:email]
      @user[:email] = params[:email]
      @user.save
    else 
      @user[:name] = params[:username]
      @user.save  
    end 
    render 'api/users/show'
  end  
end
