import React from 'react';
import PropTypes from 'prop-types';

import AdmissionsListItem from '../admissions-list-item/admissions-list-item.jsx';

import withDependentContent from '../../hocs/with-dependent-content/with-dependent-content.jsx';

const AdmissionsListItemWrapped = withDependentContent(AdmissionsListItem);

const AdmissionsList = (props) => {

  const {isContentShown, collectedAmount, admissionsList} = props;
  return (
    (!isContentShown && <li>{`Всего`}: <span>{Number(collectedAmount).toFixed(2)} BYN</span></li>)
  || admissionsList.map((it, i) => (
    <AdmissionsListItemWrapped
      key={it.comment + i}
      comment={it.comment}
      isFunding={it.isFunding}
      amount={it.amount}
      date={it.date}
    />

  ))
  );
};

AdmissionsList.propTypes = {
  isContentShown: PropTypes.bool.isRequired,
  admissionsList: PropTypes.array,
  collectedAmount: PropTypes.number,
};

export default AdmissionsList;
