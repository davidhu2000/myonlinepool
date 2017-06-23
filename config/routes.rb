Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, default: { format: :json } do 
    resources :pools, only: [:show, :create, :destroy, :update, :index]
    resources :memberships, only: [:create]
    delete 'memberships', to: 'memberships#destroy'
    resources :announcements, only: [:index, :create]
    resources :picks, only: [:index, :create]

    resources :messages, only: [:index, :create, :update, :destroy]
    resources :bulletins, only: [:index, :create]

    namespace :auth do 
      post 'registrations/confirm', to: 'registrations#update'
      resources :registrations, only: [:create]

      resources :passwords, only: [:create]
      post 'passwords/reset', to: 'passwords#update'

      resource :session, only: [:create, :destroy]
    end
  end
end
