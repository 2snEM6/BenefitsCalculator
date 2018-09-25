import { Reducer } from 'redux';
import { BenefitsActionTypes, OTHER_ACTION } from '../Types/';

export interface State {
  yearlySavings: number;
}

export type BENEFITS_ACTIONS = {
  type: BenefitsActionTypes.SET_YEARLY_BENEFIT,
  payload: number;
};

export type Actions = BENEFITS_ACTIONS | OTHER_ACTION ;

const reducer: Reducer<State, Actions> = (
  state: State,
  action: Actions = OTHER_ACTION,
) => {
  switch (action.type) {
    case BenefitsActionTypes.SET_YEARLY_BENEFIT: {
      return {
        ...state,
        yearlySavings: action.payload,
      };
    }
    default:
      return state;
  }
};

export { reducer as benefitsReducer };
