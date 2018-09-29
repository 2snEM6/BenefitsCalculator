const { it, describe } = require('mocha');
require('chai').should();
const { computeNetSalary, IRPF, computeYearlySavings } = require('../SalaryAndBenefitsTools');


describe('SalaryAndBenefitsTools', () => {
  describe('computeNetSalary', () => {
    it('should return a number given a gross salary number', () => {
      const netSalary = computeNetSalary(Math.random() * 50000, IRPF.ofYear(2017));
      netSalary.should.be.a('number');
    });

    it('should return a net salary of 0 given a gross salary equal or minor to 0', () => {
      const netSalary = computeNetSalary(0, IRPF.ofYear(2017));
      const anotherNetSalary = computeNetSalary(-1, IRPF.ofYear(2017));
      netSalary.should.equal(0);
      anotherNetSalary.should.equal(0);
    });

    it('should return 0 if the gross salary is not a number', () => {
      const netSalary = computeNetSalary('hello', IRPF.ofYear(2017));
      netSalary.should.equal(0);
    });

    it('should return the same net salary given the same gross salary', () => {
      const netSalary_first = computeNetSalary(28000, IRPF.ofYear(2017));
      const netSalary_second = computeNetSalary(28000, IRPF.ofYear(2017));
      netSalary_first.should.equal(netSalary_second);
    });
  });

  describe('computeYearlySavings', () => {
    it('should return a number given a gross salary number and a monthly expense', () => {
      const yearlySavings = computeYearlySavings(
        Math.random() * 50000, Math.random() * 300, IRPF.ofYear(2017),
      );
      yearlySavings.should.be.a('number');
    });

    it('should return a yearly savings value of 0 given a gross positive salary number and a monthly expense of 0',
      () => {
        const yearlySavings = computeYearlySavings(Math.random() * 50000, 0, IRPF.ofYear(2017));
        yearlySavings.should.equal(0);
      });

    it('should return 0 if the yearly monhtly spending is greater than the gross salary', () => {
      const grossSalary = Math.random() * 50000;
      const yearlySpending = grossSalary + 1;

      const yearlySavings = computeYearlySavings(grossSalary, yearlySpending, IRPF.ofYear(2017));
      yearlySavings.should.equal(0);
    });

    it('should return the same yearly savings given the same gross salary and monhtly spending', () => {
      const grossSalary = Math.random() * 50000;
      const yearlySpending = Math.random() * 300;

      const yearlySavingsFirst = computeYearlySavings(
        grossSalary, yearlySpending, IRPF.ofYear(2017),
      );
      const yearlySavingsSecond = computeYearlySavings(
        grossSalary, yearlySpending, IRPF.ofYear(2017),
      );

      yearlySavingsFirst.should.equal(yearlySavingsSecond);
    });

    it('should return 0 if the gross salart and/or the monhtly spending are negative', () => {
      const grossSalary = -1;
      const yearlySpending = -1;

      const yearlySavingsFirst = computeYearlySavings(grossSalary, 0, IRPF.ofYear(2017));
      const yearlySavingsSecond = computeYearlySavings(0, yearlySpending, IRPF.ofYear(2017));

      yearlySavingsFirst.should.equal(0);
      yearlySavingsSecond.should.equal(0);
    });
  });

  describe('IRPF', () => {
    describe('ofYear', () => {
      it('should return the 2017 IRPF model if 2017 is passed in', () => {
        IRPF.ofYear(2017).should.be.a('Map');
        IRPF.ofYear(2017).should.have.lengthOf(5);
      });
    });
  });
});
