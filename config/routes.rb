Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do 
    devise_for :users, controllers: {
      sessions: 'users/sessions'
    }
  end
  root "static_pages#root"
end
