Rails.application.routes.draw do
  namespace :api do
    resources :neighborhoods do
      resources :posts
    end
  end
end
