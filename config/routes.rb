Rails.application.routes.draw do
  scope '/api' do
    namespace :v1, defaults: { format: :json } do

      resources :articles, except: [:new, :edit]

    end
  end
end
