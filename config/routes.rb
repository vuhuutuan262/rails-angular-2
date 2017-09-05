Rails.application.routes.draw do
  devise_for :users

  namespace :api, {format: "json"} do
    namespace :v1 do
      resources :samples, only: [:index]
    end
  end

  root to: "entries#index"
  get "*path", to: "entries#index"
end
