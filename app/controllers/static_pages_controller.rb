class StaticPagesController < ApplicationController
  def root
    # EvaluatePicksJob.perform_now(2016, 1)
    # CalculateWeeklyResultsJob.perform_now(2016, 1)
    # EvaluatePicksJob.perform_now(2016, 2)
    # CalculateWeeklyResultsJob.perform_now(2016, 2)
  end
end
