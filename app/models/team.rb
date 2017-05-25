# == Schema Information
#
# Table name: teams
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  city       :string           not null
#  league     :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Team < ApplicationRecord
  validates :name, presence: true
  validates :city, presence: true
  validates :league, presence: true, inclusion: { in: %w( nfl ) }

  has_many :game_nfls
end
