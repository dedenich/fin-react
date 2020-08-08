import {extend, pushAdmission, getNewCollectedAmount, getNewRemainsAmount, getNewCollectedShare} from './utils.js';

const ActionType = {
  ADD_AIM: `ADD_AIM`,
  ADD_ADMISSION: `ADD_ADMISSION`,
  CHANGE_AIM_STATUS: `CHANGE_AIM_STATUS`,
  UPDATE_COLLECTED_SHARE: `UPDATE_COLLECTED_SHARE`,
  UPDATE_COLLECTED_AMOUNT: `UPDATE_COLLECTED_AMOUNT`,
  UPDATE_REMAINS_AMOUNT: `UPDATE_REMAINS_AMOUNT`,
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

  updateCollectedAmount: (admission) => ({
    type: ActionType.UPDATE_COLLECTED_AMOUNT,
    payload: admission,
  }),

  updateCollectedShare: (admission) => ({
    type: ActionType.UPDATE_COLLECTED_SHARE,
    payload: admission,
  }),

  updateRemainsAmount: () => ({
    type: ActionType.UPDATE_REMAINS_AMOUNT,
    payload: null,
  })
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

    case ActionType.UPDATE_COLLECTED_AMOUNT:
      return extend(state, {
        collectedAmount: getNewCollectedAmount(action.payload, state),
      });

    case ActionType.UPDATE_REMAINS_AMOUNT:
      return extend(state, {
        remains: getNewRemainsAmount(state),
      });

    case ActionType.UPDATE_COLLECTED_SHARE:
      return extend(state, {
        collectedShare: getNewCollectedShare(state),
      });
  }
  return state;
};

export {reducer, ActionType, ActionCreator, Operation, initialState};
