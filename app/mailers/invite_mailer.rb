class InviteMailer < ApplicationMailer
  def invite_user(user_name, email, id, password)
    @message_zero = "Join #{user_name}'s pool by creating a free account at myonlinepool.com"
    @message_one = "Pool id: #{id}"
    @message_two = "Pool password: #{password}"
    mail(to: email, subject: "#{user_name} has invited to join a pool", template_name: 'email')
  end  
end