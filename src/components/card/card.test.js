import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';

import {store as mockStore} from '../../mocks/store-mock.js';

import Card from './card.jsx';


it(`Card renders correctly`, () => {
  const tree = renderer
  .create(
      <Provider store={mockStore}>
        <Card
          capture={`Поступления`}
        />
      </Provider>
  )
  .toJSON();
  expect(tree).toMatchSnapshot();
});
