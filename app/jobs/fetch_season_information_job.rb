require 'httparty'
require 'nokogiri'
require 'json'

class FetchSeasonInformationJob < ApplicationJob
  queue_as :default

  def perform(*args)
    puts '=============================================='
    puts '=======FETCHING SEASON INFORMATION JOB========'
    puts '=============================================='

    page = HTTParty.get("http://www.nfl.com/scores")

    parse_page = Nokogiri::HTML(page)

    week = parse_page.css('.week-title').text.downcase

    if week =~ /^week [0-9]{1,2}/
      week = week.sub('week ', '').to_i
    else
      week = 1
    end

    year = parse_page.css('.year-select-form span.text').text.to_i

    p year
    p week

    puts '=============================================='
    puts '================JOB COMPLETED================='
    puts '=============================================='
  end
end
