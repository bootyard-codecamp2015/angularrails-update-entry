Rails.application.routes.draw do  
  resources :home, only: [:index]
  root 'home#index'
  
  namespace :api, defaults: { format: :json } do
    namespace :public do
      resources :topics, only: [ :index, :show, :update]
    end
  end

end  