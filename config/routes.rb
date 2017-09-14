Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'
root "neighborhoods#index"

  namespace :api do

    resources :neighborhoods do
      resources :posts
    end
  end
end


#  get "/api/users/:id", to: "api/users#show" 
#  delete "/api/users/:id", to: "api/users#destroy"  
 

