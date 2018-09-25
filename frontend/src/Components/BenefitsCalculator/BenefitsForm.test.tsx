import * as React from 'react';
import BenefitsForm from './BenefitsForm';
import { shallow, ShallowWrapper } from 'enzyme';
import { State } from '../../Reducers';
import { generateMockStore } from '../../mockStore';

describe('BenefitsForm component', () => {

  const initialState: State = {
    yearlySavings: 0,
  };
  let store;
  let container: ShallowWrapper;

  beforeEach(() => {
    store = generateMockStore(initialState);
    container = shallow(
        <BenefitsForm sliderMinimum={0} sliderMaximum={300}/>,
        { context: { store } },
      );
  });

  it('renders without crashing', () => {
    expect(container.length).toEqual(1);
  });

  it('matches value of yearlySavings prop with state value on mount', () => {
    expect(container.prop('yearlySavings')).toEqual(initialState.yearlySavings);
  });
});
