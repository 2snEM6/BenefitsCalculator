# frozen_string_literal: true

module IRPF
  @range = { [0, 12_450] => 0.19,
             [12_450, 20_200] => 0.24,
             [20_200, 35_200] => 0.30,
             [35_200, 60_000] => 0.37,
             [60_000, Float::INFINITY] => 0.45 }

  def self.calculate_net_salary(gross_salary)
    net_salary = 0

    @range.each do |_range, retention|
      next unless (gross_salary > _range[0] && gross_salary <= _range[1]) || _range[1] < gross_salary

      substract_operation = (_range[1] - _range[0])
      substract_operation = gross_salary - _range[0] if gross_salary <= _range[1]

      net_salary += (1 - retention) * substract_operation
    end

    net_salary
  end

  def self.calculate_yearly_savings(gross_salary, monthly_spending)
    return 0 if gross_salary <= monthly_spending * 12

    net_salary = calculate_net_salary(gross_salary)
    yearly_gross_spending = monthly_spending * 12

    calculate_net_salary(gross_salary - yearly_gross_spending) - (net_salary - yearly_gross_spending)
  end
end
