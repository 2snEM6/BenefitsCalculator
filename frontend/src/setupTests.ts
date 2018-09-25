import { configure } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import 'babel-polyfill';

configure({ adapter: new Adapter() });
