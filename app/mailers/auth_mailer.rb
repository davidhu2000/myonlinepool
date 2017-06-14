class AuthMailer < ApplicationMailer

  def confirm_email(user)
    @user = user
    @url = "#{root_url}#/auth?form=confirm-email&token=#{user.confirmation_token}&email=#{user.email}"
    @title = 'Activate your account'
    @message_one = "Thanks for signing up to My Online Pool"
    @message_two = "You can join other pools right after you click the link to activate your account."
    mail(to: @user.email, subject: "Confirm your account to My Online Pool!", template_name: 'email')
  end

  def reset_password(user)
    @user = user
    @url = "#{root_url}#/auth?form=password-reset&token=#{user.reset_password_token}&email=#{user.email}"
  end
end
