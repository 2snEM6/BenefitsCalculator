# frozen_string_literal: true



class BenefitsControllerTest < ActionDispatch::IntegrationTest
  test '[Benefits Controller] should return a valid JSON response for a valid JSON input' do
    post '/benefits/restaurants', params: {
      grossSalary: 35_000,
      monthlySpending: 150
    }

    assert_response :success
  end

  test '[Benefits Controller] should give an error when a benefit is not yet implemented / exposed' do
    post '/benefits/childcare', params: {
      grossSalary: 35_000,
      monthlySpending: 150
    }

    assert_response 400
  end
end
