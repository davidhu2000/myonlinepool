Rails.application.routes.draw do
  scope :api, default: { format: :json } do 
    devise_for :users
  end

  namespace :api, default: { format: :json } do 
    resources :pools, only: [:show, :create, :destroy, :update]
  end
  root "static_pages#root"
end
