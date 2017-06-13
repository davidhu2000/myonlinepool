class ApplicationController < ActionController::Base
  # protect_from_forgery with: :exception

  def is_signed_in?
    !!current_user
  end

  def current_user
    session['warden.user.user.key']
  end

  helper_method :is_signed_in?, :current_user
end
