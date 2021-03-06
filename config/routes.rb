Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, default: { format: :json } do 
    resources :pools, only: [:show, :create, :destroy, :update, :index]
    patch 'payment_confirmation', to: 'pools#payment_confirmation'
    resources :memberships, only: [:create, :update]
    delete 'memberships', to: 'memberships#destroy'
    resources :announcements, only: [:index, :create]
    resources :picks, only: [:index, :create]
    resources :game_nfls, only: [:index, :update, :create]
    delete 'game_nfls', to: 'game_nfls#destroy'
    resources :teams, only: [:index]
    resources :messages, only: [:index, :create, :update, :destroy]
    resources :bulletins, only: [:index, :create]
    delete 'bulletins', to: 'bulletins#destroy'
    resources :mailers, only: [:create]
    resources :sysprefs, only: [:index]
    post :sysprefs, to: 'sysprefs#update'

    get 'standings', to: 'standings#index'

    namespace :auth do 
      post 'registrations/confirm', to: 'registrations#update'
      resources :registrations, only: [:create]

      resources :passwords, only: [:create]
      post 'passwords/reset', to: 'passwords#update'

      resource :session, only: [:create, :destroy]

      resource :users, only: [:update]
    end
  end
end
