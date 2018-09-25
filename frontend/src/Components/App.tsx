import * as React from 'react';
import '../CSS/App.css';
import '../CSS/box-shadows.css';
import '../CSS/carbon-design-system.css';
import { BenefitsCalculator } from './BenefitsCalculator';
import { Provider } from 'react-redux';
import { store } from '../Stores';

class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <div className="App">
          <BenefitsCalculator/>
          <p className="Author">By Daniel Limia</p>
        </div>
      </Provider>
    );
  }
}

export default App;
