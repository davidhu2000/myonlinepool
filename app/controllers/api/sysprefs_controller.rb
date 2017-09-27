class Api::SysprefsController < ApplicationController
  def index 
    puts "hits index!!!!!!"
    @sysprefs = Syspref.find_by(sport: params[:data][:sport]) || Syspref.new(year: 2017, week: 1)
    @sysprefs
  end 

  def update
    puts "hits update!!!!!!!"
    @sysprefs = Syspref.last || Syspref.new
    if params[:prefs][:week]
      @sysprefs.week = params[:prefs][:week]
    end
    if params[:prefs][:year]
      @sysprefs.year = params[:prefs][:year]
    end
    @sysprefs.save
    render 'api/sysprefs/index'
  end
end
