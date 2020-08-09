import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

const store = mockStore({
  admissions: [],
  remains: 0,
  collectedShare: 0,
  collectedAmount: 0,
  aim: {
    description: ``,
    amount: `0`,
  },
  isAimAdded: false,
});

export {store};
