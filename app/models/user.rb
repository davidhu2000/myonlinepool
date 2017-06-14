# == Schema Information
#
# Table name: users
#
#  id                     :integer          not null, primary key
#  email                  :string           default(""), not null
#  encrypted_password     :string           default(""), not null
#  reset_password_token   :string
#  reset_password_sent_at :datetime
#  remember_created_at    :datetime
#  sign_in_count          :integer          default("0"), not null
#  current_sign_in_at     :datetime
#  last_sign_in_at        :datetime
#  current_sign_in_ip     :inet
#  last_sign_in_ip        :inet
#  confirmation_token     :string
#  confirmed_at           :datetime
#  confirmation_sent_at   :datetime
#  failed_attempts        :integer          default("10"), not null
#  unlock_token           :string
#  locked_at              :datetime
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#  unconfirmed_email      :string
#  name                   :string           not null
#

class User < ApplicationRecord
  include ApplicationHelper 

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    user && user.valid_password?(password) ? user : nil
  end

  after_initialize :ensure_session_token

  validates :email, presence: true
  validates :password_digest, presence: true
  validates :session_token, presence: true

  has_many :picks
  has_many :memberships
  has_many :pools, through: :memberships, source: :pool
  has_many :messages

  attr_accessor :password_confirmation

  def ensure_session_token
    self.session_token ||= generate_session_token
  end

  def reset_session_token!
    self.session_token = generate_session_token
    self.save!
    self.session_token
  end

  def generate_session_token
    SecureRandom.urlsafe_base64(128)
  end

  def update_password(password, confirmation)
    if password == confirmation 
      self.password = password
      self.save
    else 
      return false
    end
  end
end
