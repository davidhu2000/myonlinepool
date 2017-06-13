class AuthMailer < ApplicationMailer

  def confirm_email(user)
    @user = user
    @url = "#{root_url}/#/auth/confirm-email?token=#{user.confirm_token}"
    mail(to: @user.email, subject: "Confirm your account to My Online Pool!")
  end
end
