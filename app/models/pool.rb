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
#  identifier      :string           not null
#

class Pool < ApplicationRecord
  include ApplicationHelper

  def self.find_by_credentials(title, password)
    pool = Pool.find_by(title: title)
    pool && pool.valid_password?(password) ? pool : nil
  end

  after_initialize :set_key

  def set_key
    self.identifier = SecureRandom.urlsafe_base64(8)
  end

  validates :title, presence: true
  validates :moderator_id, presence: true, numericality: { only_integer: true }
  validates :buy_in, presence: true, numericality: { only_integer: true }
  validates :league, presence: true
  validates :season, presence: true, numericality: { only_integer: true }
  validates :password_digest, presence: { message: 'Password cannot be blank' }
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :identifier, presence: true, uniqueness: true

  belongs_to :moderator, foreign_key: :moderator_id, class_name: :User, primary_key: :id

  has_many :memberships, dependent: :destroy, inverse_of: :pool

  has_many :members, through: :memberships, source: :user

  has_many :picks, dependent: :destroy
  has_many :messages, dependent: :destroy
  has_many :bulletins, dependent: :destroy

  def self.create_pool(pool)
    Pool.transaction do
      pool.save!
      Membership.create!(user_id: pool.moderator_id, pool_id: pool.id)
    end
    pool
  end

end
