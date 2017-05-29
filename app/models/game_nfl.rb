# == Schema Information
#
# Table name: game_nfls
#
#  id         :integer          not null, primary key
#  week       :integer          not null
#  season     :integer          not null
#  home_id    :integer          not null
#  away_id    :integer          not null
#  home_score :integer
#  away_score :integer
#  completed  :boolean          default("false"), not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class GameNfl < ApplicationRecord
  validates :week, presence: true, numericality: { only_integer: true, greater_than: 0, less_than: 22 }
  validates :season, presence: true, numericality: { only_integer: true, greater_than: 2000 }
  validates :home_id, presence: true, numericality: { only_integer: true }
  validates :away_id, presence: true, numericality: { only_integer: true }
  validates :home_score, numericality: { only_integer: true, greater_than_or_equal_to: 0 }
  validates :away_score, numericality: { only_integer: true, greater_than_or_equal_to: 0 }
  validates :completed, presence: true

  belongs_to :home, class_name: :Team, foreign_key: :home_id
  belongs_to :away, class_name: :Team, foreign_key: :away_id

  has_many :picks
end