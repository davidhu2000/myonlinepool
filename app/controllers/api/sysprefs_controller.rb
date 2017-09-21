class Api::SysprefsController < ApplicationController
  def index 
    puts "hits index!!!!!!"
    if params[:prefs] 
      @sysprefs = Syspref.last
      if params[:prefs][:week]
        @sysprefs[:week] = params[:prefs][:week]
      end
      if params[:prefs][:year]
        @sysprefs[:year] = params[:prefs][:year]
      end
      @sysprefs.save
    else   
      @sysprefs = Syspref.last
    end 
    @sysprefs
  end 

  # def update
  #   puts "hits update!!!!!!!"
  #   sysprefs = Syspref.last
  #   if params[:prefs][:week]
  #     sysprefs[:week] = params[:prefs][:week]
  #   end
  #   if params[:prefs][:year]
  #     sysprefs[:year] = params[:prefs][:year]
  #   end
  #   sysprefs.save
  #   render 'api/sysprefs/index'
  # end
end
