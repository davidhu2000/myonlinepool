require 'httparty'
require 'Nokogiri'
require 'JSON'

class FetchNflScoresJob < ApplicationJob
  queue_as :default

  def perform(season, weeks)
    begin
      puts '=============================================='
      puts '=======FETCHING NFL SCHEDULE JOB=============='
      puts '=============================================='
      
      weeks = Array(weeks)

      raise 'Weeks need to be integers' unless weeks.all? { |w| w.is_a? Integer }
      raise 'Week value cannot be greater than 22' unless weeks.all { |w| w <= 22 }

      weeks.each do |week|
        if week <= 17
          type = 'REG'
        elsif week == 21
          type = 'PRO'
        else 
          type = 'POST'
        end

        page = HTTParty.get("https://www.nfl.com/scores/#{season}/#{type}#{week}")

        parse_page = Nokogiri::HTML(page)

        parse_page.css('.new-score-box-wrapper').each do |game|
          # game date
          p date = game.css('.new-score-box-heading .date').text
          p time = game.css('.new-score-box .game-center-area .time-left').text

          p date_str = date + ', ' + season.to_s + ', ' + time.sub('ET', 'EDT')

          p Time.parse(date_str).utc
          # home team
          home_team = game.css('.new-score-box .home-team')
          p home_team.css('.team-name a').text
          p home_team.css('.team-record').text.strip.split(/[^0-9]/).drop(1)
          p home_team.css('.total-score').text

          # away team
          away_team = game.css('.new-score-box .away-team')
          p away_team.css('.team-name a').text
          p away_team.css('.team-record').text.strip.split(/[^0-9]/).drop(1)
          p away_team.css('.total-score').text
          gets
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
