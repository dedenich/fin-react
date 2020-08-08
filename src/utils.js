const extend = (a, b) => {
  return Object.assign({}, a, b);
};

const pushAdmission = (admission, state) => {
  let arrCopy = [...state.admissions];
  arrCopy.push(admission);
  return arrCopy;
};

const getNewCollectedAmount = (admission, state) => {
  let prevAmount = Number(state.collectedAmount);
  return admission.isFunding ? (prevAmount + Number(admission.amount)) : (prevAmount - Number(admission.amount));
};

const getNewCollectedShare = (state) => {
  return (Number(state.collectedAmount) * 100) / Number(state.aim.amount);
};

const getNewRemainsAmount = (state) => {
  return Number(state.aim.amount) - Number(state.collectedAmount);
};

export {
  extend,
  pushAdmission,
  getNewCollectedAmount,
  getNewCollectedShare,
  getNewRemainsAmount,
};
