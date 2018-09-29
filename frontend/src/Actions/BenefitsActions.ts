import { WebsocketsEvents } from '../Types';
import { emit } from './WebsocketsActions';

const calculateYearlyBenefits
  = (grossSalary: number, monthlySpending: number) => {
    emit('CALCULATE_YEARLY_SAVINGS', {
      gross_salary: grossSalary,
      monthly_spending: monthlySpending,
    } as WebsocketsEvents.EMITTED.CALL_CALCULATE_YEARLY_SAVINGS_PAYLOAD);
  };

export { calculateYearlyBenefits };
