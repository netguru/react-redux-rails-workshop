Rails.application.routes.draw do
  get '/' => 'app#index'
  get '/*path' => 'app#index'
end
