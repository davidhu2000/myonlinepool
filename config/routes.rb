Rails.application.routes.draw do
  scope :api do 
    devise_for :users, controllers: {
      sessions: 'api/users/sessions'
    }
  end
  root "static_pages#root"
end
