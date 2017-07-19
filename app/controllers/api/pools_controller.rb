class Api::PoolsController < ApplicationController
  before_action :require_membership_to_access, only: [:show]
  before_action :require_moderator, only: [:update, :destroy]

  def index 
    @pools = current_user.pools
  end
  
  def create
    @pool = Pool.new(pool_params)
    @pool.moderator_id = current_user.id
    @pool.created_at = get_current_time
    @pool.updated_at = get_current_time
    @pool.password_digest = 'not-secure'
    @pool.memberships.new(user_id: current_user.id)
    @pool.identifier = SecureRandom.urlsafe_base64(8)
    while Pool.where(identifier: @pool.identifier)
      @pool.identifier = SecureRandom.urlsafe_base64(8)
    end
    puts @pool
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
    @pool = Pool.where(id: params[:id]).includes(:weekly_result_nfls, memberships: :user).first
    @locked = !@pool.payment_made && (get_current_time.to_date - @pool.created_at.to_date).to_i > 7
    @is_moderator = current_user.id == @pool.moderator_id
    @standings = show_standings(@pool)
    @moderator_name = User.find_by(id: @pool.moderator_id).name
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

  def payment_confirmation
    pool = Pool.find_by(identifier: params[:pool][:identifier])
    if pool
      case params[:pool][:amount_paid].to_i
        when 1595 then max_size = 15
        when 2595 then max_size = 1000
        else max_size = 5
      end

      pool.max_size = max_size
      pool.amount_paid = params[:pool][:amount_paid]
      pool.transaction_number = params[:pool][:transaction_number]
      pool.payment_made = true

      if pool.save
        render json: ['Payment successful!']
      else
        render json: pool.errors.full_messages, status: 422
      end

    else
      render json: ['Cannot find pool with that identifier. Please contact administrator.'], status: 404
    end
  end

  private

  def pool_params
    params.require(:pool).permit(
      :title, :description, :buy_in, :league, :season, 
      :password, :max_size, :amount_paid, :payment_made, :transaction_number
    )
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
