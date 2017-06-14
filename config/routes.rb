Rails.application.routes.draw do

  namespace :api, default: { format: :json } do 
    resources :pools, only: [:show, :create, :destroy, :update]

    namespace :auth do 
      resources :registrations, only: [:create]

      patch 'registrations', to: 'registrations#update'
      
      resource :session, only: [:create, :destroy]
    end
  end
  root "static_pages#root"
end
