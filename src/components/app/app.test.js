import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';

import {store as mockStore} from '../../mocks/store-mock.js';

import App from './app.jsx';

// const mockFn = jest.fn();

it(`App renders correctly`, () => {

  const tree = renderer
  .create(
      <Provider store={mockStore}>
        <App/>
      </Provider>
  )
  .toJSON();
  expect(tree).toMatchSnapshot();
});
