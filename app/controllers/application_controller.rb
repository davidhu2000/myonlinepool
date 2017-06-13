class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user, :is_signed_in?

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def is_signed_in?
    !!current_user
  end

  def login(user)
    session[:session_token] = user.reset_session_token!
    @current_user = user
  end

  def logout
    session[:session_token] = nil
    @current_user = nil
  end

  def require_logged_in
    unless logged_in?
      render json: ['You must be logged in to view this page'], status: 401
    end
  end

  def generate_token
    SecureRandom.urlsafe_base64(128)
  end
end
