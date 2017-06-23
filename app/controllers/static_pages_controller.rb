class StaticPagesController < ApplicationController
  def root
    EvaluatePicksJob.perform_now(2016, 1)
  end
end
