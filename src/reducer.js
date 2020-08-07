import {extend, pushAdmission} from './utils.js';

const ActionType = {
  ADD_AIM: `ADD_AIM`,
  ADD_ADMISSION: `ADD_ADMISSION`,
  CHANGE_AIM_STATUS: `CHANGE_AIM_STATUS`,
};

const initialState = {
  admissions: [],
  remains: 0,
  collectedShare: 0,
  collectedAmount: 0,
  aim: {
    description: ``,
    amount: 0,
  },
  isAimAdded: false,
};

const ActionCreator = {
  changeAimStatus: () => ({
    type: ActionType.CHANGE_AIM_STATUS,
    payload: true,
  }),

  addAdmission: (admission) => ({
    type: ActionType.ADD_ADMISSION,
    payload: admission,
  }),

  addAim: (aim) => ({
    type: ActionType.ADD_AIM,
    payload: aim,
  }),
};

const Operation = {
  changeAimStatus: () => (dispatch) => {
    dispatch(ActionCreator.changeAimStatus());
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_AIM_STATUS:
      return extend(state, {isAimAdded: action.payload});

    case ActionType.ADD_ADMISSION:
      return extend(state, {
        admissions: pushAdmission(action.payload, state),
      });

    case ActionType.ADD_AIM:
      return extend(state, {
        aim: action.payload,
      });
  }
  return state;
};

export {reducer, ActionType, ActionCreator, Operation};
