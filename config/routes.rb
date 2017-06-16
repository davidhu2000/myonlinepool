Rails.application.routes.draw do

  namespace :api, default: { format: :json } do 
    resources :pools, only: [:show, :create, :destroy, :update, :index]

    namespace :auth do 
      post 'registrations/confirm', to: 'registrations#update'
      resources :registrations, only: [:create]

      resources :passwords, only: [:create]
      post 'passwords/reset', to: 'passwords#update'

      resource :session, only: [:create, :destroy]
    end
  end
  root "static_pages#root"
end
