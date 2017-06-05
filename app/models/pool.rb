# == Schema Information
#
# Table name: pools
#
#  id              :integer          not null, primary key
#  title           :string           not null
#  description     :string
#  moderator_id    :integer          not null
#  buy_in          :integer          default("0"), not null
#  league          :string           not null
#  season          :integer          not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  password_digest :string           not null
#

class Pool < ApplicationRecord
  validates :title, presence: true
  validates :moderator_id, presence: true, numericality: { only_integer: true }
  validates :buy_in, presence: true, numericality: { only_integer: true }
  validates :league, presence: true
  validates :season, presence: true, numericality: { only_integer: true }
  validates :password_digest, presence: { message: 'Password cannot be blank' }
  validates :password, length: { minimum: 6, allow_nil: true }

  belongs_to :moderator, foreign_key: :moderator_id, class_name: :User, primary_key: :id

  has_many :memberships

  has_many :members, through: :memberships, source: :user

  has_many :picks
  has_many :messages
  has_many :bulletins

  def self.find_by_credentials(title, password)
    pool = Pool.find_by(title: title)
    pool && pool.valid_password?(password) ? pool : nil
  end

  attr_reader :password

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

end
