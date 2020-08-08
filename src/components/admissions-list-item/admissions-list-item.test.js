import React from 'react';
import renderer from 'react-test-renderer';
import AdmissionsListItem from './admissions-list-item.jsx';


it(`AdmissionsListItem is rendered correctly`, () => {
  const tree = renderer
  .create(
      <AdmissionsListItem
        isFunding={false}
        comment={`comment`}
        amount={12.0}
        date={`12.09 12.23`}
        isContentShown={false}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
