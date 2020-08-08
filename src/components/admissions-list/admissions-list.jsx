import React from 'react';
import PropTypes from 'prop-types';

const AdmissionsList = (props) => {

  const {isContentShown, collectedAmount, admissionsList} = props;
  return (
    (!isContentShown && <li>{`Собрано`}: <span>{Number(collectedAmount).toFixed(2)} BYN</span></li>)
  || admissionsList.map((it, i) => (
    <li key={it.comment + i}>
      <div className={`card-list__ind${it.isFunding ? ` increase` : ``}`}>
        <svg className="card-list__ind" height="30" width="30">
          <circle cx="15" cy="15" r="8" fill="#f5625d">
          </circle>
        </svg>
      </div>
      <div className="card-list__comment">{it.comment}</div>
      <div className="card-list__summa">{Number(it.amount).toFixed(2)}</div>
    </li>
  ))
  );
};

AdmissionsList.propTypes = {
  isContentShown: PropTypes.bool.isRequired,
  admissionsList: PropTypes.array,
  collectedAmount: PropTypes.number,
};

export default AdmissionsList;
