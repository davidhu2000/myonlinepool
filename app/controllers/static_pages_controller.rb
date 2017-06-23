class StaticPagesController < ApplicationController
  def root
    # EvaluatePicksJob.perform_later(2016, 1)
    # CalculateWeeklyResultsJob.perform_later(2016, 1)
  end
end
