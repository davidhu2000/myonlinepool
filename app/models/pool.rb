# == Schema Information
#
# Table name: pools
#
#  id           :integer          not null, primary key
#  title        :string           not null
#  description  :string
#  moderator_id :integer          not null
#  buy_in       :integer          default("0"), not null
#  league       :string           not null
#  season       :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Pool < ApplicationRecord
  validates :title, presence: true
  validates :moderator_id, presence: true, numericality: { only_integer: true }
  validates :buy_in, presence: true, numericality: { only_integer: true }
  validates :league, presence: true
  validates :season, presence: true, numericality: { only_integer: true }

  belongs_to :moderator, foreign_key: :moderator_id, class_name: :User, primary_key: :id

  has_many :memberships

  has_many :members, through: :memberships, source: :user

  has_many :picks
end
