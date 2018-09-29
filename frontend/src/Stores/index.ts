import { createStore } from 'redux';
import { benefitsReducer, State } from '../Reducers';
import { initWebsocketActions } from '../Actions';

const initialState: State = {
  yearlySavings: 0,
};

const store = createStore(benefitsReducer, initialState);
initWebsocketActions(store);

export { store };
