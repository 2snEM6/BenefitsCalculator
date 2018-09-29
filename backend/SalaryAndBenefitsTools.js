class IRPF {
  static ofYear(year)  {
    const map = new Map();

    switch (year) {
      case 2017: {
        map.set([0, 12450], 0.19);
        map.set([12450, 20200], 0.24);
        map.set([20200, 35200], 0.30);
        map.set([35200, 60000], 0.37);
        map.set([60000, Infinity], 0.45);
      }
    }

    return map;
  };
}

/**
 *
 * @param {number} grossSalary
 * @param {Map} IRPFModel
 */
const computeNetSalary =  (grossSalary, IRPFModel) => {
  let netSalary = 0;

  for (const [range, retention] of IRPFModel) {
    if (grossSalary > range[0] && grossSalary <= range[1] || range[1] < grossSalary) {
      let substractOperation = (range[1] - range[0]);
      if (grossSalary <= range[1]) substractOperation = grossSalary - range[0];
      netSalary += (1 - retention) * substractOperation;
    }
  }

  return netSalary;
};

/**
 *
 * @param {number} grossSalary
 * @param {number} monthlySpending
 * @param {Map} IRPFModel
 * @returns {number}
 */
const computeYearlySavings = (grossSalary, monthlySpending, IRPFModel) => {
  if (grossSalary <= monthlySpending * 12 || (grossSalary < 0 || monthlySpending < 0)) return 0;

  const netSalary = computeNetSalary(grossSalary, IRPFModel);
  const yearlyGrossSpending = monthlySpending * 12;

  return computeNetSalary(grossSalary - yearlyGrossSpending, IRPFModel) - (netSalary - yearlyGrossSpending)
};


module.exports = {
  computeNetSalary,
  IRPF,
  computeYearlySavings
};
