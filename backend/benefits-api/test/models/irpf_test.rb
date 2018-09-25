# frozen_string_literal: true

class IRPFTest < ActiveSupport::TestCase
  test '[IRPF Model#calculate_yearly_savings] should return the same result for the same input' do
    first_result = IRPF.calculate_yearly_savings(35_000, 100)
    second_result = IRPF.calculate_yearly_savings(35_000, 100)
    assert_equal first_result, second_result
  end

  test '[IRPF Model#calculate_yearly_savings] should return 0 if gross salary < monthly spending' do
    assert_equal 0.0, IRPF.calculate_yearly_savings(50, 100)
  end

  test '[IRPF Model#calculate_net_salary] should return the same result for the same input' do
    first_result = IRPF.calculate_net_salary(60_000)
    second_result = IRPF.calculate_net_salary(60_000)
    assert_equal first_result, second_result
  end

  test '[IRPF Model#calculate_net_salary] should return zero if input equals zero' do
    assert_equal 0, IRPF.calculate_net_salary(0)
  end
end
