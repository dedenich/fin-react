import React from 'react';
import PropTypes from 'prop-types';

import CardList from '../card-list/card-list.jsx';

import {CardCaptures} from '../../const.js';

const Card = (props) => {
  const {capture} = props;
  return (
    <div className="card-wrapper">
      <p className="capture">{capture}:</p>
      <div className="card">
        <CardList
          idAdmissionsCard={capture === CardCaptures.ADMISSIONS}
        />
      </div>
    </div>);
};

Card.propTypes = {
  capture: PropTypes.oneOf([CardCaptures.ADMISSIONS, CardCaptures.RESULT]).isRequired,
};

export default Card;
