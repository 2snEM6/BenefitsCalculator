import * as React from 'react';
import BenefitsForm from './BenefitsForm';

export default class BenefitsCalculator extends React.Component {

  public render() {
    return (
      <div className="BenefitsCalculator bShadow-2 bShadow-2h">
        <BenefitsForm sliderMinimum={0} sliderMaximum={300}/>
      </div>
    );
  }
}
