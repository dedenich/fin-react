import React, {Fragment} from 'react';
// import PropTypes from 'prop-types';

import Aim from '../aim/aim.jsx';

import mockAim from '../../mocks/aim-mock.js';

const {amount, description} = mockAim;

const App = () => <Fragment>
  <Aim
    amount = {amount}
    description = {description}
  />
</Fragment>;

export default App;
