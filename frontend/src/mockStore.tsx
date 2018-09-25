import reduxThunk from 'redux-thunk';
import reduxMockStore, { MockStore } from 'redux-mock-store';
import { State } from './Reducers';

export const generateMockStore = (state: State | {}): MockStore<State | {}> => {
  const mockStore = reduxMockStore([reduxThunk]);
  const store = mockStore(state);

  store.clearActions();
  return store;
};
