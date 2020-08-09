import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';

import {store as mockStore} from '../../mocks/store-mock.js';

import withForm from "./with-form.jsx";

const MockComponent = () => <div></div>;

const MockComponentWrapped = withForm(MockComponent);

it(`withForm is rendered correctly`, () => {
  const tree = renderer
  .create(
      <Provider store={mockStore}>
        <MockComponentWrapped
          isAimAdded={false}
          onCloseButtonClick={jest.fn()}
        />
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
