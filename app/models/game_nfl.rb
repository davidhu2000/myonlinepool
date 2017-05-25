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
end
