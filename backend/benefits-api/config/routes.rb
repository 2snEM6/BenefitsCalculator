# frozen_string_literal: true

Rails.application.routes.draw do
  scope constraints: { format: 'json' } do
    post 'benefits/:benefit', to: 'benefits#calculate_yearly_benefits'
  end
end
