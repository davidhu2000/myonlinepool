class AuthMailer < ApplicationMailer

  def confirm_email(user)
    @user = user
    @url = "#{ENV['BASE_URL']}/#/auth?form=confirm-email&token=#{user.confirmation_token}&email=#{user.email}"
    @title = 'Activate your account'
    @message_one = "Thanks for signing up to My Online Pool"
    @message_two = "You can create or join other pools right after you click the link to activate your account."
    @button_text = 'Activate Account'
    mail(to: @user.email, subject: "Confirm your account to My Online Pool!", template_name: 'email')
  end

  def reset_password(user)
    @user = user
    @url = "#{ENV['BASE_URL']}/#/auth?form=reset-password&token=#{user.reset_password_token}&email=#{user.email}"
    @title = 'Reset your password'
    @message_one = "You requested to reset your password"
    @message_two = "You will be able to create a new password."
    @button_text = 'Reset Password'
    mail(to: @user.email, subject: "Reset your password to My Online Pool!", template_name: 'email')
  end

end
