class Api::StandingsController < ApplicationController
  def index
    # TODO: make season, week dynamic
    @weekly_standings = get_weekly_leaders(2017, 1)
    @season_standings = get_season_leaders(2017)
    render :index
  end

  def get_weekly_leaders(season, week)
    WeeklyResultNfl.where(season: season, week: week)
      .includes(:pool, :user)
      .order(correct_picks: :desc)
      .limit(12)
  end

  def get_season_leaders(season)
    WeeklyResultNfl.where(season: season)
      .includes(:user, :pool)
      .select(
        :user_id, 
        :pool_id, 
        'SUM(correct_picks) as correct_picks',
        'SUM(wrong_picks) as wrong_picks'
      )
      .group(:user_id, :pool_id)
      .order('correct_picks DESC')
      .limit(12)
  end
end

