import * as React from 'react';
import { connect } from 'react-redux';
import { State } from '../../Reducers';
import { calculateYearlyBenefits } from '../../Actions/';
const { Form, TextInput, Slider, FormGroup } = require('carbon-components-react/lib');

export interface ICustomFormProps {
  sliderMinimum?: number;
  sliderMaximum?: number;
  yearlySavings?: number;
  calculateYearlyBenefit?: (grossSalary: number, monthlyAllowance: number) => void;
}

export class BenefitsFormView
  extends React.Component<ICustomFormProps> {

  grossSalary: number;
  monthlySpending: number;

  public static defaultProps: ICustomFormProps = {
    yearlySavings: 0,
    sliderMinimum: 0,
    sliderMaximum: 300,
  };

  constructor(props: Readonly<ICustomFormProps>) {
    super(props);
  }

  textInputOnChange = (data: React.SyntheticEvent) => {
    this.grossSalary = (data.target as any).value;
    if (this.grossSalary) {
      this.props.calculateYearlyBenefit!(this.grossSalary, this.monthlySpending);
    }
  }

  sliderOnChange = (data: any) => {
    this.monthlySpending = data.value;
    if (this.grossSalary) {
      this.props.calculateYearlyBenefit!(this.grossSalary, this.monthlySpending);
    }
  }

  render() {
    let emoji;
    if (this.props.yearlySavings! > 0) emoji = '🎉';

    return (
      <Form>
        <h2 style={{
          marginBottom: '2rem',
        }}>Calculate your benefits</h2>

        <FormGroup legendText="">
          <TextInput
            onChange={this.textInputOnChange}
            style={{
              marginBottom: '2rem',
            }}
            id="salary"
            labelText="My gross salary is"
            type="number"
            placeholder="0€"
            hideLabel={false}
            invalidText="A valid value is required"
          />
          <Slider
            onChange={this.sliderOnChange}
            id="slider"
            value={100}
            inputType=""
            ariaLabelInput=""
            minLabel="€"
            maxLabel="€"
            min={this.props.sliderMinimum}
            max={this.props.sliderMaximum}
            labelText="And I spend in restaurants per month"
          />
        </FormGroup>
        <div>
          <h3 style={{ display: 'inline' }}>
            You'll be saving <b style={ { fontWeight: 'bold', fontSize: '1.25rem' } }>
            {this.props.yearlySavings}€ </b>
             per year {emoji}
          </h3>

        </div>
      </Form>
    );
  }

}

export const mapDispatchToProps =
  () => {
    return {
      calculateYearlyBenefit: (grossSalary: number, monthAllowance: number) => {
        calculateYearlyBenefits(grossSalary, monthAllowance);
      },
    };
  };

export const mapStateToProps = (state: State, ownProps: ICustomFormProps) => {
  return {
    sliderMinimum: ownProps.sliderMinimum,
    sliderMaximum: ownProps.sliderMaximum,
    yearlySavings: state.yearlySavings,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BenefitsFormView);
