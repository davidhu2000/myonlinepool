Rails.application.routes.draw do

  namespace :api do
    get 'registrations/api/sessions'
  end

  namespace :api, default: { format: :json } do 
    resources :pools, only: [:show, :create, :destroy, :update]
  end
  root "static_pages#root"
end
