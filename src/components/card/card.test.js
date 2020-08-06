import React from 'react';
import renderer from 'react-test-renderer';

import Card from './card.jsx';


it(`Card renders correctly`, () => {
  const tree = renderer
  .create(
      <Card
        capture={`Поступления`}
      />
  )
  .toJSON();
  expect(tree).toMatchSnapshot();
});
