
namespace Events {
  export namespace EMITTED {
    export type CALL_CALCULATE_NET_SALARY= typeof CALL_CALCULATE_NET_SALARY;
    export const CALL_CALCULATE_NET_SALARY = 'CALCULATE_NET_SALARY';
    export type CALL_CALCULATE_NET_SALARY_PAYLOAD = {
      gross_salary: number,
    };

    export type CALL_CALCULATE_YEARLY_SAVINGS = typeof CALL_CALCULATE_YEARLY_SAVINGS;
    export const CALL_CALCULATE_YEARLY_SAVINGS = 'CALCULATE_YEARLY_SAVINGS';
    export type CALL_CALCULATE_YEARLY_SAVINGS_PAYLOAD = {
      gross_salary: number,
      monthly_spending: number,
    };

    export type ALL = CALL_CALCULATE_NET_SALARY | CALL_CALCULATE_YEARLY_SAVINGS;
  }

  export namespace RECEIVED {
    export type NET_SALARY = typeof NET_SALARY;
    export const NET_SALARY = 'NET_SALARY';
    export type NET_SALARY_PAYLOAD = {
      net_salary: number,
    };

    export type YEARLY_SAVINGS = typeof YEARLY_SAVINGS;
    export const YEARLY_SAVINGS = 'YEARLY_SAVINGS';
    export type YEARLY_SAVINGS_PAYLOAD = {
      yearly_savings: number,
    };

    export type ALL = NET_SALARY | YEARLY_SAVINGS;
  }

  export type ALL = EMITTED.ALL | RECEIVED.ALL;
}

export { Events };
