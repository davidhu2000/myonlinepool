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
    
    records = Hash.new { |h, k| h[k] = {  wins: 0,
                                          losses: 0,
                                          ties: 0, 
                                          home_wins: 0,
                                          home_losses: 0,
                                          away_wins: 0,
                                          away_losses: 0,
                                          beat_over: 0,
                                          points_for: 0,
                                          points_against: 0,
                                          home_ties: 0,
                                          away_ties: 0 } 
                                        }

    games.each do |game|
      winner = game.home_score <=> game.away_score

      case winner
        when 1
          records[game.home_id][:wins] += 1
          records[game.home_id][:home_wins] += 1
          records[game.away_id][:losses] += 1
          records[game.away_id][:away_losses] += 1
        when 0
          records[game.home_id][:ties] += 1
          records[game.home_id][:home_ties] += 1
          records[game.away_id][:ties] += 1
          records[game.away_id][:away_ties] += 1
        when -1
          records[game.away_id][:wins] += 1
          records[game.away_id][:away_wins] += 1
          records[game.home_id][:losses] += 1
          records[game.home_id][:home_losses] += 1
      end

      if game.spread && (game.home_score + game.away_score) > game.spread
        records[game.home_id][:beat_over] += 1
        records[game.away_id][:beat_over] += 1
      end

      records[game.home_id][:points_for] += game.home_score
      records[game.home_id][:points_against] += game.away_score

      records[game.away_id][:points_for] += game.away_score
      records[game.away_id][:points_against] += game.home_score
      
      records[game.home_id][:name] = Team.find_by(id: game.home_id).name
      records[game.away_id][:name] = Team.find_by(id: game.away_id).name
    end

    records
  end

end
