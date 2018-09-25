import { BenefitsActionTypes } from '../Types';
import { Action, ActionCreator } from 'redux';
import { State } from '../Reducers';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import axios from 'axios';

const calculateYearlyBenefits
  : ActionCreator<ThunkAction<Promise<Action | undefined>, State, void, Action>>
  = (grossSalary: number, monthlySpending: number) => {

    return async (dispatch: ThunkDispatch<State, void, Action>): Promise<Action | undefined> => {
      console.log('Requesting');

      const response = await axios.post('http://127.0.0.1:3001/benefits/restaurants', {
        grossSalary,
        monthlySpending,
      });

      if (response.status === 200) {
        const { savings } = (response.data as any);
        return dispatch({
          type: BenefitsActionTypes.SET_YEARLY_BENEFIT,
          payload: savings,
        });
      }

      return undefined;
    };
  };

export { calculateYearlyBenefits };
