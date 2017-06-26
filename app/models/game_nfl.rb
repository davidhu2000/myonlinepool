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
#  start_time :datetime         not null
#  spread     :integer
#  line       :integer
#  evaluated  :boolean          default("false"), not null
#

class GameNfl < ApplicationRecord
  validates :week, presence: true, numericality: { only_integer: true, greater_than: 0, less_than: 22 }
  validates :season, presence: true, numericality: { only_integer: true, greater_than: 2000 }
  validates :home, presence: true
  validates :away, presence: true
  validates :home_score, numericality: { only_integer: true, greater_than_or_equal_to: 0 }, allow_nil: true
  validates :away_score, numericality: { only_integer: true, greater_than_or_equal_to: 0 }, allow_nil: true
  validates :completed, inclusion: { in: [true, false] }
  validates :evaluated, inclusion: { in: [true, false] }

  belongs_to :home, class_name: :Team, foreign_key: :home_id
  belongs_to :away, class_name: :Team, foreign_key: :away_id

  has_many :picks, foreign_key: :game_id, class_name: :Pick
end
