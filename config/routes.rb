Rails.application.routes.draw do

  namespace :api, default: { format: :json } do 
    devise_for :users, controllers: {
      sessions: 'api/users/sessions',
      passwords: 'api/users/passwords',
      registrations: 'api/users/registrations',
      confirmations: 'api/users/confirmations',
      unlocks: 'api/users/unlocks'
    }
    resources :pools, only: [:show, :create, :destroy, :update]
  end
  root "static_pages#root"
end
