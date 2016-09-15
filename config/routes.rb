Rails.application.routes.draw do
  devise_for :users
  get '/' => 'app#index'
  get '/*path' => 'app#index'
end
