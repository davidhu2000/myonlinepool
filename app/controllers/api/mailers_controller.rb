class Api::MailersController < ApplicationController
  def create 
    puts params
    # InviteMailer.invite_user(username,email,id,password).deliver
  end 
end
