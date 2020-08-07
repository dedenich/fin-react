import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import CardList from '../card-list/card-list.jsx';

import {CardCaptures} from '../../const.js';

const Card = (props) => {
  const {capture} = props;
  return (
    <div className="card-wrapper">
      <p className="capture">{capture}:</p>
      <div className="card">
        <CardList
          isAdmissionsCard={capture === CardCaptures.ADMISSIONS}
        />
      </div>
    </div>);
};

Card.propTypes = {
  capture: PropTypes.oneOf([CardCaptures.ADMISSIONS, CardCaptures.RESULT]).isRequired,
};

const mapStateToProps = (state) => ({
  collectedAmount: state.isAimAdded,
});

export default connect(mapStateToProps)(Card);
