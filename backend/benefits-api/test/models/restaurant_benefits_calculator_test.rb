# frozen_string_literal: true

class RestaurantBenefitsCalculatorTest < ActiveSupport::TestCase
  test 'should return an integer given valid input' do
    result = RestaurantBenefitsCalculator.calculate_yearly_savings(35_000, 100)

    assert_kind_of Numeric, result
  end

  test 'should return zero if invalid input' do
    result = RestaurantBenefitsCalculator.calculate_yearly_savings('money', 'more_money')

    assert_equal 0, result
  end
end
