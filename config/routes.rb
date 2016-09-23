Rails.application.routes.draw do
  devise_for :users
  mount API::V1::Users => '/api'

  root to: 'restaurants#index'
  get '/admin' => 'app#admin'
  resources :restaurants, except: [:index]
  resources :comments
end
