class StaticPagesController < ApplicationController
  def root
    EvaluatePicksJob.perform_now
  end
end
