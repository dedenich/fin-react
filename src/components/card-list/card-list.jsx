import React, {PureComponent, Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {ResultCaptures} from '../../const.js';

class CardList extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {admissionsList, collectedAmount, collectedShare} = this.props;
    const {isAdmissionsCard} = this.props;
    return (
      <ul className="card-list">
        {isAdmissionsCard ?
          (admissionsList && admissionsList.map((it, i) => (
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
          )))
          :
          <Fragment>
            <li>{ResultCaptures.COLLECTED}: <span>{Number(collectedShare).toFixed(2)}%</span></li>
            <li>{ResultCaptures.LEFT}: <span>{Number(collectedAmount).toFixed(2)} BYN</span></li>
          </Fragment>
        }
      </ul>
    );
  }
}

CardList.propTypes = {
  isAdmissionsCard: PropTypes.bool.isRequired,
  admissionsList: PropTypes.array,
  result: PropTypes.object,
  collectedAmount: PropTypes.number,
  collectedShare: PropTypes.number,
};

const mapStateToProps = (state) => ({
  admissionsList: state.admissions,
  collectedShare: state.collectedShare,
  collectedAmount: state.collectedAmount,
});

export default connect(mapStateToProps)(CardList);
