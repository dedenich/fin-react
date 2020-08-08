import React from 'react';
import PropTypes from 'prop-types';

import CardList from '../card-list/card-list.jsx';
import withDependentContent from '../../hocs/with-dependent-content/with-dependent-content.jsx';

import {CardCaptures} from '../../const.js';

const CardListWrapped = withDependentContent(CardList);

const Card = (props) => {
  const {capture} = props;
  return (
    <div className="card-wrapper">
      <p className="capture">{capture}:</p>
      <div className="card">
        <CardListWrapped
          isAdmissionsCard={capture === CardCaptures.ADMISSIONS}
        />
      </div>
    </div>);
};

Card.propTypes = {
  capture: PropTypes.oneOf([CardCaptures.ADMISSIONS, CardCaptures.RESULT]).isRequired,
};

export default Card;
