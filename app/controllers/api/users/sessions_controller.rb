class Api::Users::SessionsController < Devise::SessionsController
  respond_to :json
  # before_action :configure_sign_in_params, only: [:create]
  skip_before_action :require_no_authentication
  skip_before_action :verify_signed_out_user, only: [:destroy]

  before_action :ensure_params_exist, only: [:create]

  # GET /resource/sign_in
  # def new
  #   super
  # end

  def after_sign_in_path_for(resource)
    # sign_in_url = url_for(:action => 'show_info', :controller => 'sessions', :only_path => false, :protocol => 'http')
    render json: ['testing']
    return
  end

  def show_info 
    render json: current_user
  end

  # POST /resource/sign_in
  def create
    resource = User.find_by(email: params[:user][:email])
    return invalid_login_attempt unless resource

    if resource.valid_password?(params[:user][:password])
      sign_in("user", resource)

      render json: resource
      return
    end
    invalid_login_attempt
  end

  # DELETE /resource/sign_out
  def destroy
    # sign_out current_user
    super
  end

  protected

  def ensure_params_exist
    return unless params[:user].blank?
    render :json=>{:success=>false, :message=>"Email and/or password cannot be empty."}, :status=>422
  end

  def invalid_login_attempt
    warden.custom_failure!
    render :json=> {:success=>false, :message=>"Error with your login or password"}, :status=>401
  end

  # If you have extra params to permit, append them to the sanitizer.
  # def configure_sign_in_params
  #   devise_parameter_sanitizer.permit(:sign_in, keys: [:attribute])
  # end
end
