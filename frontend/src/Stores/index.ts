import { createStore } from 'redux';
import { benefitsReducer, State } from '../Reducers';
import { initActions } from '../Actions';

const initialState: State = {
  yearlySavings: 0,
};

const store = createStore(benefitsReducer, initialState);
initActions(store);

export { store };
