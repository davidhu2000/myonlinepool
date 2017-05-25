Rails.application.routes.draw do
  scope :api do 
    devise_for :users, controllers: {
      sessions: 'api/users/sessions'
    }
  end

  namespace :api, default: { format: :json } do 
    resources :pools, only: [:show, :create, :destroy, :update]
  end
  root "static_pages#root"
end
