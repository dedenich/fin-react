import React from 'react';
import renderer from 'react-test-renderer';

import Aim from './aim.jsx';

const aimMock = {
  amount: 1212,
  description: `Билет в Зеленоград`
};

it(`Aim renders correctly`, () => {
  const {amount, description} = aimMock;
  const tree = renderer
  .create(
      <Aim
        amount={amount}
        description={description}
      />
  )
  .toJSON();
  expect(tree).toMatchSnapshot();
});
