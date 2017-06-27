require 'net/http'
require 'json'

class Api::GameNflsController < ApplicationController
  def index 
    @week = params[:week]
    @games = GameNfl.where(season: 2017, week: params[:week])
    puts @games
  end

  def create 

  end

  def update 

  end
end
