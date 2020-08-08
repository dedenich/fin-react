import React from 'react';
import renderer from 'react-test-renderer';
import withDependentContent from "./with-form.jsx";

const MockComponent = () => <div></div>;

const MockComponentWrapped = withDependentContent(MockComponent);

it(`withDependentContent is rendered correctly`, () => {
  const tree = renderer
  .create(
      <MockComponentWrapped/>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
