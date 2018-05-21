require 'net/http'
require 'json'

class Api::GameNflsController < ApplicationController
  def index
    # TODO: make season, week dynamic
    # p params
    @week = params[:week]
    @games = GameNfl.where(season: 2018, week: params[:week]).includes(:home, :away)
  end
  
  def create
    # p params

    if params[:property] == 'yes'      
      FetchScheduleJob.perform_now(2018)
    else 
      p params
    end
  end

  def update 
    game = GameNfl.find_by(id: params[:game][:game_id])
    game[:home_score] = params[:game][:home_score]
    game[:away_score] = params[:game][:away_score]
    game[:line] = params[:game][:line]
    game[:spread] = params[:game][:spread]
    game[:completed] = params[:game][:completed]
    game[:start_time] = params[:game][:start_time]

    if game.save
      if game[:completed]
        # TODO: make season, week dynamic
        EvaluatePicksJob.perform_now(2018, params[:game][:week])
        CalculateWeeklyResultsJob.perform_now(2018, params[:game][:week])
        render json: ['Picks Evaluated', 'Weekly Result Calculated']
      else
        render json: ['Game successfully updated.']
      end
    else 
      render json: ['unable to update game'], status: 422
    end
  end
end