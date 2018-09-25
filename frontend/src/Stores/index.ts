import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { benefitsReducer, State } from '../Reducers';

const initialState: State = {
  yearlySavings: 0,
};

const store = createStore(benefitsReducer, initialState, applyMiddleware(reduxThunk));

export { store };
