import React from 'react';
import renderer from 'react-test-renderer';
import AddForm from "./add-form.jsx";


it(`withForm is rendered correctly`, () => {
  const tree = renderer
  .create(
      <AddForm
        isAimAdded={false}
        onCloseButtonClick={jest.fn()}
        onInputChange={jest.fn()}
        onFormSubmit={jest.fn()}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
