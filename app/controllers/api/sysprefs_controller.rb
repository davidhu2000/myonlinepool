class Api::SysprefsController < ApplicationController
  def index 
    @sysprefs = Syspref.last
  end 
end
