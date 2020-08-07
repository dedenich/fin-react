import React, {PureComponent} from "react";
import PropTypes from 'prop-types';

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

      // const {onAimAdd} = this.props;
      // const {comment, amount} = this.state;

      const {onCloseButtonClick} = this.props;
      onCloseButtonClick();
    }

    handleAdmissionSumbit(evt) {
      evt.preventDefault();

      // const {onAdmissionAdd} = this.props;
      // const {comment, amount, isFunding} = this.state;

      const {onCloseButtonClick} = this.props;
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
    onLogin: PropTypes.func,
    isAimAdded: PropTypes.bool.isRequired,
    onCloseButtonClick: PropTypes.func.isRequired,
  };

  return WithForm;
};

export default withForm;
