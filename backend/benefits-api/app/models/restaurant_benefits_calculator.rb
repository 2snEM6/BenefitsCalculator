module RestaurantBenefitsCalculator
  def self.calculate_yearly_savings(gross_salary, monthly_spending)
    if gross_salary.is_a? Numeric and monthly_spending.is_a? Numeric
      IRPF.calculate_yearly_savings(gross_salary, monthly_spending)
    else
      0
    end
  end
end