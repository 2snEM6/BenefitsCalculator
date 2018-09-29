import { Events as WebsocketsEvents } from './WebsocketsTypes';

export namespace BenefitsActionTypes {
  export type SET_YEARLY_BENEFIT = typeof SET_YEARLY_BENEFIT;
  export const SET_YEARLY_BENEFIT = 'SET_YEARLY_BENEFIT';
  export type SET_YEARLY_BENEFIT_PAYLOAD = number;
}

export type OTHER_ACTION = { type: '' };
export const OTHER_ACTION : OTHER_ACTION = { type: '' };

export { WebsocketsEvents };
