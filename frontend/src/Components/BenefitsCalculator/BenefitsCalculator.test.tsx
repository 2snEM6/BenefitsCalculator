import * as React from 'react';
import BenefitsCalculator from './BenefitsCalculator';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<BenefitsCalculator/>);
});
