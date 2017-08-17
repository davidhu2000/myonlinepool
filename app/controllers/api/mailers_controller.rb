class Api::MailersController < ApplicationController
  def create 
    puts params
    InviteMailer.invite_user(params[:username],params[:email],params[:id],params[:password]).deliver
  end
end
