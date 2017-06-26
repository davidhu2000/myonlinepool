# == Schema Information
#
# Table name: teams
#
#  id           :integer          not null, primary key
#  name         :string           not null
#  city         :string           not null
#  league       :string           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  abbreviation :string
#

class Team < ApplicationRecord
  validates :name, presence: true
  validates :city, presence: true
  validates :league, presence: true, inclusion: { in: %w( nfl ) }

  has_many :game_nfls

  def self.calculate_team_records(season)
    games = GameNfl.where(season: season, completed: true)
    
    records = Hash.new { |h, k| h[k] = { wins: 0, losses: 0, ties: 0 } }

    games.each do |game|
      winner = game.home_score <=> game.away_score

      case winner
        when 1
          records[game.home_id][:wins] += 1
          records[game.away_id][:losses] += 1
        when 0
          records[game.home_id][:ties] += 1
          records[game.away_id][:ties] += 1
        when -1
          records[game.away_id][:wins] += 1
          records[game.home_id][:losses] += 1
      end
    end

    records
  end

end
