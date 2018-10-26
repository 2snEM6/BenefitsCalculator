import { WebsocketsEvents, BenefitsActionTypes } from '../Types';
import { emit } from './WebsocketsActions';
import { Store } from 'redux';

let store: Store;

function initBenefitsActions(aStore: Store) {
  store = aStore;
}

const calculateYearlyBenefits
  = (grossSalary: number, monthlySpending: number) => {
    const payload = Number(
      localStorage.getItem(`${grossSalary};${monthlySpending}`) || '-1');
    if (payload > -1) {
      store.dispatch(
        {
          type: BenefitsActionTypes.SET_YEARLY_BENEFIT,
          payload: ~~payload,
        },
      );
      return;
    }

    emit('CALCULATE_YEARLY_SAVINGS', {
      gross_salary: grossSalary,
      monthly_spending: monthlySpending,
    } as WebsocketsEvents.EMITTED.CALL_CALCULATE_YEARLY_SAVINGS_PAYLOAD);
  };

export { calculateYearlyBenefits, initBenefitsActions };
