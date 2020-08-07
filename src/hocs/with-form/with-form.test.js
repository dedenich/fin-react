import React from 'react';
import renderer from 'react-test-renderer';
import withForm from "./with-form.jsx";

const MockComponent = () => <div></div>;

const MockComponentWrapped = withForm(MockComponent);

it(`withForm is rendered correctly`, () => {
  const tree = renderer
  .create(
      <MockComponentWrapped
        isAimAdded={false}
        onCloseButtonClick={jest.fn()}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
