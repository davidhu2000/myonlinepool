# == Schema Information
#
# Table name: weekly_result_nfls
#
#  id            :integer          not null, primary key
#  user_id       :integer
#  pool_id       :integer
#  week          :integer
#  season        :integer
#  correct_picks :integer
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class WeeklyResultNfl < ApplicationRecord
  belongs_to :user
  belongs_to :pool

  validates :user, presence: true
  validates :pool, presence: true
  validates :week, presence: true 
  validates :season, presence: true

end
