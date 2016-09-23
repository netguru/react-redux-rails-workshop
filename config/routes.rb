Rails.application.routes.draw do
  devise_for :users
  mount API::V1::Users => '/api'

  get '/' => 'app#index'
  get '/admin' => 'app#admin'
  resources :restaurants
  resources :comments
end
