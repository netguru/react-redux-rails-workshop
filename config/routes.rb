Rails.application.routes.draw do
  devise_for :users
  get '/' => 'app#index'
  mount API::V1::Users => '/'
  get '/*path' => 'app#index'
end
