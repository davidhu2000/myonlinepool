class Api::StandingsController < ApplicationController
  def index
    @weekly_standings = get_weekly_leaders(2016, 2)
    @season_standings = get_season_leaders(2016)
    render :index
  end

  def get_weekly_leaders(season, week)
    @weekly_standings = WeeklyResultNfl.where(season: season, week: week).order(correct_picks: :desc).limit(10).includes(:pool, :user)
  end

  # def get_season_leaders(season)
  #   WeeklyResultNfl.where(season: season).joins(:user, :pool)
  #     .select('users.name as user_name', 'pools.title as pool_name', 'SUM(correct_picks) as correct_picks', 'SUM(wrong_picks) as wrong_picks')
  #     .group('user_name', 'pool_name')
  #     .order('correct_picks DESC')
  #     .limit(10)
  # end

  def get_season_leaders(season)
    WeeklyResultNfl.where(season: season).includes(:user, :pool)
      .select(:user_id, :pool_id, 'SUM(correct_picks) as correct_picks', 'SUM(wrong_picks) as wrong_picks')
      .group(:user_id, :pool_id)
      .order('correct_picks DESC')
      .limit(10)
  end
end

