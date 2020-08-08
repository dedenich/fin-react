import React from 'react';
import PropTypes from 'prop-types';


const AdmissionsListItem = (props) => {
  const {isFunding, comment, amount, date, onContentShow, isContentShown} = props;
  return (
    <li onClick={onContentShow}>
      <div className={`card-list__ind${isFunding ? ` increase` : ``}`}>
        <svg className="card-list__ind" height="30" width="30">
          <circle cx="15" cy="15" r="8" fill="#f5625d">
          </circle>
        </svg>
      </div>
      <div className="card-list__comment">{comment}</div>
      <div className="card-list__summa">{isContentShown ? Number(amount).toFixed(2) : <span className="time">{date}</span>}</div>
    </li>);
};

AdmissionsListItem.propTypes = {
  comment: PropTypes.string.isRequired,
  isFunding: PropTypes.bool.isRequired,
  isContentShown: PropTypes.bool.isRequired,
  amount: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  onContentShow: PropTypes.func.isRequired,
};

export default AdmissionsListItem;
