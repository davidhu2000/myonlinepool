Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do 
    devise_for :users
  end
  root "static_pages#root"
end
