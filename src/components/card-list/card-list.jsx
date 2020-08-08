import React, {PureComponent, Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import AdmissionsList from '../admissions-list/admissions-list.jsx';

import {ResultCaptures} from '../../const.js';

class CardList extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {admissionsList, collectedAmount, collectedShare, onContentShow, isContentShown} = this.props;
    const {isAdmissionsCard} = this.props;
    return (
      <Fragment>
        {isAdmissionsCard && <button className={`close_button ${!isContentShown ? `rotated` : ``}`} onClick={onContentShow}/>}
        <ul className="card-list">
          {isAdmissionsCard ?
            <AdmissionsList
              isContentShown={isContentShown}
              admissionsList={admissionsList}
              collectedAmount={collectedAmount}
            />
            :
            <Fragment>
              <li>{ResultCaptures.COLLECTED}: <span>{Number(collectedShare).toFixed(2)}%</span></li>
              <li>{ResultCaptures.LEFT}: <span>{Number(collectedAmount).toFixed(2)} BYN</span></li>
            </Fragment>
          }
        </ul>
      </Fragment>

    );
  }
}

CardList.propTypes = {
  isAdmissionsCard: PropTypes.bool.isRequired,
  isContentShown: PropTypes.bool.isRequired,
  admissionsList: PropTypes.array,
  result: PropTypes.object,
  collectedAmount: PropTypes.number,
  collectedShare: PropTypes.number,
  onContentShow: PropTypes.func
};

const mapStateToProps = (state) => ({
  admissionsList: state.admissions,
  collectedShare: state.collectedShare,
  collectedAmount: state.collectedAmount,
});

export default connect(mapStateToProps)(CardList);
