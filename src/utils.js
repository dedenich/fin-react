const extend = (a, b) => {
  return Object.assign({}, a, b);
};

const pushAdmission = (admission, state) => {
  let arrCopy = [...state.admissions];
  arrCopy.push(admission);
  return arrCopy;
};

export {
  extend,
  pushAdmission,
};
