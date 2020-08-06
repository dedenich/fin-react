import React, {Fragment} from 'react';
// import PropTypes from 'prop-types';

import Aim from '../aim/aim.jsx';
import Card from '../card/card.jsx';

import {CardCaptures} from '../../const.js';
import mockAim from '../../mocks/aim-mock.js';

const {amount, description} = mockAim;

const App = () => <Fragment>
  <Aim
    amount = {amount}
    description = {description}
  />
  <Card
    capture={CardCaptures.ADMISSIONS}
  />
  <Card
    capture={CardCaptures.RESULT}
  />
</Fragment>;

export default App;
