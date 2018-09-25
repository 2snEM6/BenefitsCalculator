import { BENEFITS_ACTIONS, benefitsReducer, State } from './BenefitsReducer';
import { BenefitsActionTypes, OTHER_ACTION } from '../Types';

describe('Benefits reducer', () => {

  it('returns the state if no action match', () => {
    const initialState: State = {
      yearlySavings: 0,
    };

    const nextState = benefitsReducer(initialState, OTHER_ACTION);
    expect(nextState).toEqual(initialState);
  });

  it('sets up fetched yearly savings', () => {

    const previousState: State = {
      yearlySavings: 0,
    };

    const action: BENEFITS_ACTIONS = {
      type: BenefitsActionTypes.SET_YEARLY_BENEFIT,
      payload: 400,
    };

    const nextState = benefitsReducer(previousState, action);

    expect(nextState).toEqual({
      yearlySavings: 400,
    });
  });
});
