import { WebsocketsEvents, BenefitsActionTypes } from '../Types';
import { emit } from './WebsocketsActions';
import { Store } from 'redux';

let store: Store;

function initBenefitsActions(_store: Store) {
  store = _store;
};

const calculateYearlyBenefits
  = (grossSalary: number, monthlySpending: number) => {
    const payload = localStorage.getItem(`${grossSalary};${monthlySpending}`);
    if (payload) {
      store.dispatch(
        {
          type: BenefitsActionTypes.SET_YEARLY_BENEFIT,
          payload: ~~payload
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
