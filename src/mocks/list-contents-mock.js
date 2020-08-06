const mockAdmissions = [
  {
    isFunding: true,
    amount: 12,
    comment: `пополнение`,
    date: `6.8 11:45`
  },
  {
    isFunding: false,
    amount: 2,
    comment: `снятие`,
    date: `6.8 11:45`
  },
];

const mockResult = {
  amountLeft: 12,
  amountPercent: 35.0,
};

export {
  mockAdmissions,
  mockResult
};
