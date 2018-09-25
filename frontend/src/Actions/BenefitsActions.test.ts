import { generateMockStore } from '../mockStore';
import axios from 'axios';
import axiosMockAdapter from 'axios-mock-adapter';
import { calculateYearlyBenefits } from './BenefitsActions';
import { BenefitsActionTypes } from '../Types';

describe('Benefits actions', () => {
  describe('Restaurant benefit: calculate yearly savings', () => {

    let store: any;
    let axiosMock: any;

    beforeEach(() => {
      store = generateMockStore({
        yearlySavings: 0,
      });
      axiosMock = new axiosMockAdapter(axios);
    });

    afterEach(() => {
      axiosMock.reset();
    });

    it('fetches the backend to get the yearly savings and triggers SET_YEARLY_BENEFIT action',
       async () => {
         axiosMock.onPost('http://127.0.0.1:3001/benefits/restaurants', {
           grossSalary: 35000,
           monthlySpending: 23,
         }).reply(200, {
           savings: 400,
         });

         await store.dispatch(calculateYearlyBenefits(35000, 23));

         expect(store.getActions()).toEqual(
           [
             {
               type: BenefitsActionTypes.SET_YEARLY_BENEFIT,
               payload: 400,
             },
           ],
         );
       });
  });

});
