import React from 'react';
import renderer from 'react-test-renderer';

import CardList from './card-list.jsx';

import {mockResult} from '../../mocks/list-contents-mock.js';

it(`CardList renders correctly`, () => {
  const tree = renderer
  .create(
      <CardList
        idAdmissionsCard={false}
        result={mockResult}
      />
  )
  .toJSON();
  expect(tree).toMatchSnapshot();
});
