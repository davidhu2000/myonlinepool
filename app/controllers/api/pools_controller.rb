class Api::PoolsController < ApplicationController
  before_action :require_membership_to_access, only: [:show]
  before_action :require_moderator, only: [:update, :destroy]

  def index 
    @pools = current_user.pools
  end
  
  def create
    @pool = Pool.new(pool_params)
    @pool.moderator_id = current_user.id

    @pool.memberships.new(user_id: current_user.id)
    @standings = {}
    if @pool.save
      @standings[0] = {
        current_user.id => WeeklyResultNfl.new(
          season: 2016,
          week: 0,
          correct_picks: 0,
          wrong_picks: 0,
          user_id: current_user.id
        )
      }
      render 'api/pools/show'
    else
      render json: @pool.errors.full_messages, status: 422
    end
  end

  def show
    @pool = Pool.where(id: params[:id]).includes(:members, :weekly_result_nfls).first
    @standings = show_standings(@pool)
  end

  def update
    if @pool.update(pool_params)
      @standings = show_standings(@pool)
      render 'api/pools/show'
    else
      render json: @pool.errors.full_messages, status: 422
    end
  end

  def destroy
    if @pool 
      @pool.destroy
      head :ok
    else 
      render json: ['Pool does not exist'], status: 404
    end
  end

  private

  def pool_params
    params.require(:pool).permit(:title, :description, :buy_in, :league, :season, :password, :max_size, :amount_paid, :made_payment)
  end

  def require_membership_to_access
    @pool = Pool.where(id: params[:id]).includes(:members).first

    unless @pool.members.include?(current_user)
      return render json: ['You need to be a member of this pool.'], status: 401
    end
  end

  def require_moderator
    @pool = Pool.where(id: params[:id]).first

    unless @pool.moderator_id == current_user.id
      return render json: ['You need to be the moderator for access.'], status: 401
    end
  end

  def show_standings(pool)
    standings = {}

    # TODO: make season, week dynamic
    # initialize standings for before season starts
    pool.members.each do |member|
      standings[0] ||= {}
      standings[0][member.id] = WeeklyResultNfl.new(
        season: 2016,
        week: 0,
        correct_picks: 0,
        wrong_picks: 0,
        user_id: member.id
      )
    end

    pool.weekly_result_nfls.each do |res|
      standings[res.week] ||= {}
      standings[res.week][res.user_id] = res
    end
    standings
  end
end
