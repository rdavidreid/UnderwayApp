Rails.application.routes.draw do
  root to: "static_pages#root"
  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]
  namespace :api, defaults: {format: :json} do
    resources :projects, only: [:index, :show, :create, :update, :destroy]
    resources :rewards, only: [:index, :show, :create, :destroy]
    resources :backers, only: [:create]
  end

end
