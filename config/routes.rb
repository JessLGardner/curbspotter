Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'
  
  root "neighborhoods#index"

  get "/api/users/:id", to: "api/users#show" 

  namespace :api do
    resources :neighborhoods do
      resources :posts
    end
  end
end
 
#  delete "/api/users/:id", to: "api/users#destroy"  
 

