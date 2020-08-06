import React, {PureComponent, Fragment} from 'react';
import PropTypes from 'prop-types';

import {mockAdmissions, mockResult} from '../../mocks/list-contents-mock.js';
import {ResultCaptures} from '../../const.js';

class CardList extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    // const {admissionsList, result} = this.props;
    const admissionsList = mockAdmissions;
    const result = mockResult;
    const {idAdmissionsCard} = this.props;
    return (
      <ul className="card-list">
        {idAdmissionsCard ?
          admissionsList.map((it) => (
            <li key={it.date}>
              <div className={`card-list__ind${it.isFunding ? ` increase` : ``}`}>
                <svg className="card-list__ind" height="30" width="30">
                  <circle cx="15" cy="15" r="8" fill="#f5625d">
                  </circle>
                </svg>
              </div>
              <div className="card-list__comment">{it.comment}</div>
              <div className="card-list__summa" data-time={it.date}>{it.amount}</div>
            </li>
          ))
          :
          <Fragment>
            <li>{ResultCaptures.COLLECTED}: <span>{Number(result.amountPercent).toFixed(2)}%</span></li>
            <li>{ResultCaptures.LEFT}: <span>{Number(result.amountLeft).toFixed(2)} BYN</span></li>
          </Fragment>
        }
      </ul>
    );
  }
}

CardList.propTypes = {
  idAdmissionsCard: PropTypes.bool.isRequired,
  admissionsList: PropTypes.array,
  result: PropTypes.object,
};

export default CardList;
