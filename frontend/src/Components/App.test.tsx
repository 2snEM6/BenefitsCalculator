import * as React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('App', () => {
  it('renders without crashing', () => {
    shallow(<App/>);
  });
});
