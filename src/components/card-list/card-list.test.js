import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';

import {store as mockStore} from '../../mocks/store-mock.js';

import CardList from './card-list.jsx';

it(`CardList renders correctly`, () => {
  const tree = renderer
  .create(
      <Provider store={mockStore}>
        <CardList
          isAdmissionsCard={true}
          isContentShown={true}
        />
      </Provider>
  )
  .toJSON();
  expect(tree).toMatchSnapshot();
});
