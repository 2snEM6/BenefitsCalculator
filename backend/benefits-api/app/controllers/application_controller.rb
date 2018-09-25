# frozen_string_literal: true

class ApplicationController < ActionController::API
  before_action :ensure_json_request

  def ensure_json_request
    return if request.format == :json

    render head :not_acceptable
  end

  respond_to :json
end
