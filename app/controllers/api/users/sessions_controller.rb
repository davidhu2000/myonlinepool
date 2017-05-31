class Api::Users::SessionsController < Devise::SessionsController
  respond_to :json
  # before_action :configure_sign_in_params, only: [:create]
  before_action :ensure_params_exist

  # GET /resource/sign_in
  # def new
  #   super
  # end

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
    sign_out(resource_name)
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
