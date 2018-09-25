# frozen_string_literal: true

class BenefitsController < ActionController::API
  def calculate_yearly_benefits
    validate_calculate_yearly_benefits

    gross_salary, monthly_spending, benefit =
      params.values_at(:grossSalary, :monthlySpending, :benefit)

    gross_salary = gross_salary.to_i
    monthly_spending = monthly_spending.to_i

    case benefit
    when 'restaurants'
      savings = RestaurantBenefitsCalculator
                .calculate_yearly_savings(gross_salary, monthly_spending)

      render json: { savings: savings.to_i }
    else
      render json: {
        error: "#{benefit} is not a benefit supported yet"
      }, status: 400
    end
  end

  private

  def validate_calculate_yearly_benefits
    params.require(%i[grossSalary monthlySpending benefit])
  end
end
