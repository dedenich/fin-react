import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {ActionCreator, Operation} from '../../reducer.js';

const withForm = (Component) => {
  class WithForm extends PureComponent {

    constructor(props) {
      super(props);
      this.state = {
        comment: ``,
        amount: ``,
        isFunding: true,
      };
      this.handleAdmissionSumbit = this.handleAdmissionSumbit.bind(this);
      this.handleAimSumbit = this.handleAimSumbit.bind(this);
      this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleAimSumbit(evt) {
      evt.preventDefault();

      const {onAddAim, onCloseButtonClick} = this.props;
      const {comment, amount} = this.state;
      onAddAim({
        description: comment,
        amount,
      });
      onCloseButtonClick();
    }

    handleAdmissionSumbit(evt) {
      evt.preventDefault();

      const {onAddAdmission, onCloseButtonClick} = this.props;
      const {comment, amount, isFunding} = this.state;

      const date = new Date();

      onAddAdmission({
        date: `${date.getDate()}.${date.getMonth() + 1}<br/>${date.getHours()}:${date.getMinutes()}`,
        comment,
        amount,
        isFunding,
      });
      onCloseButtonClick();
    }

    handleInputChange(evt) {
      evt.preventDefault();
      const {name, value} = evt.target;
      if (evt.target.type === `checkbox`) {
        this.setState({
          [name]: evt.target.checked,
        });
      } else {
        this.setState({
          [name]: value,
        });
      }
    }

    render() {
      const {isAimAdded} = this.props;
      const {amount, comment, isFunding} = this.state;
      return (
        <Component
          {...this.props}
          amount={amount}
          comment={comment}
          isFunding={isFunding}
          onFormSubmit={isAimAdded ? this.handleAdmissionSumbit : this.handleAimSumbit}
          onInputChange={this.handleInputChange}
        />
      );
    }
  }

  WithForm.propTypes = {
    onAddAim: PropTypes.func,
    onAddAdmission: PropTypes.func,
    isAimAdded: PropTypes.bool.isRequired,
    onCloseButtonClick: PropTypes.func.isRequired,
  };

  const mapDispatchToProps = (dispatch) => ({
    onAddAdmission(admission) {
      dispatch(ActionCreator.addAdmission(admission));
    },
    onAddAim(aim) {
      dispatch(ActionCreator.addAim(aim));
      dispatch(Operation.changeAimStatus());
    },
  });

  return connect(null, mapDispatchToProps)(WithForm);
};

export default withForm;
