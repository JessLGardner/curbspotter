Rails.application.routes.draw do
root "neighborhoods#index"

  namespace :api do
    resources :neighborhoods do
      resources :posts
    end
  end
end
