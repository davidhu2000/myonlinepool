require 'net/http'
require 'json'

class Api::GameNflsController < ApplicationController
  def index
    # TODO: dynamic season value
    @week = params[:week]
    @games = GameNfl.where(season: 2017, week: params[:week]).includes(:home, :away)
  end

  def create 

  end

  def update 
    game = GameNfl.find_by(id: params[:game][:game_id])
    game[:home_score] = params[:game][:home_score]
    game[:away_score] = params[:game][:away_score]
    game[:line] = params[:game][:line]
    game[:spread] = params[:game][:spread]
    game[:completed] = params[:game][:completed]
    
    # if game[:home_score] && game[:away_score]    
    if game.save 
      if game[:completed]
        EvaluatePicksJob.perform_now(201)
        render json: ['should be running jobs']
      else
        render json: ['Game successfully updated.']
      end
    else 
      render json: ['unable to update game'], status: 422
    end
  end
end
