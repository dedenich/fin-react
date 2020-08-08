import React from 'react';
import renderer from 'react-test-renderer';

import AdmissiomsList from './admissions-list.jsx';


it(`AdmissiomsList renders correctly`, () => {
  const tree = renderer
  .create(
      <AdmissiomsList
        admissionsList={[]}
        isContentShown={false}
        collectedAmount={4}
      />
  )
  .toJSON();
  expect(tree).toMatchSnapshot();
});
