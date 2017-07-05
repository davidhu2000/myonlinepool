require 'httparty'
require 'nokogiri'
require 'JSON'

class FetchNflScoresJob < ApplicationJob
  queue_as :default

  def perform(season, weeks)
    begin
      puts '=============================================='
      puts '=======FETCHING NFL SCHEDULE JOB=============='
      puts '=============================================='

      teams = {}
      
      Team.where(league: 'nfl').each do |team|
        teams[team.name] = team.id
      end
      
      weeks = Array(weeks)

      raise 'Weeks need to be integers' unless weeks.all? { |w| w.is_a? Integer }
      raise 'Week value cannot be greater than 22' unless weeks.all? { |w| w <= 22 }

      weeks.each do |week|
        next if week == 21
        if week <= 17
          type = 'REG'
        else 
          type = 'POST'
        end

        page = HTTParty.get("https://www.nfl.com/scores/#{season}/#{type}#{week}")

        parse_page = Nokogiri::HTML(page)

        parse_page.css('.new-score-box-wrapper').each do |game|
          # game date
          date = game.css('.new-score-box-heading .date').text
          time = game.css('.new-score-box .game-center-area .time-left').text.downcase.strip
          date_str = date + ', ' + season.to_s
          date_str += ', ' + time.sub('ET', 'EDT') unless time.include? 'final'

          start_time = Time.parse(date_str).utc

          # home team
          home_team = game.css('.new-score-box .home-team')
          home_name = home_team.css('.team-name a').text.downcase
          home_id = teams[home_name]
          home_record = home_team.css('.team-record').text.strip.gsub(/[()]/, '')
          home_score = home_team.css('.total-score').text

          # away team
          away_team = game.css('.new-score-box .away-team')
          away_name = away_team.css('.team-name a').text.downcase
          away_id = teams[away_name]
          away_record = away_team.css('.team-record').text.strip.gsub(/[()]/, '')
          away_score = away_team.css('.total-score').text
          
          game = GameNfl.find_or_initialize_by(
            home_id: home_id,
            away_id: away_id,
            season: season,
            week: week
          )

          game.home_score = home_score unless home_score == '--'
          game.away_score = away_score unless away_score == '--'
          game.start_time = start_time
          game.completed = time.include? 'final'
          game.home_record = home_record
          game.away_record = away_record

          game.save!
        end

      end

      puts '=============================================='
      puts '================JOB COMPLETED================='
      puts '=============================================='

    rescue ActiveRecord::RecordInvalid => invalid
      p 'Please try again.'
      p invalid
    end
  end
end
