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
          <a target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}
             href="https://github.com/limiaspasdaniel"
             className="Author"
          >
            By Daniel Limia
          </a>
        </div>
      </Provider>
    );
  }
}

export default App;
