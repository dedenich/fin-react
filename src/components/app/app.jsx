import React, {Fragment, PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Aim from '../aim/aim.jsx';
import Card from '../card/card.jsx';
import AddButton from '../add-button/add-button.jsx';
import AddForm from '../add-form/add-form.jsx';

import withForm from '../../hocs/with-form/with-form.jsx';

import {CardCaptures} from '../../const.js';

const AddFormWrapped = withForm(AddForm);

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isFormShown: false,
    };
    this.handleFormShow = this.handleFormShow.bind(this);
  }

  handleFormShow() {
    this.setState((prevState) => ({isFormShown: !prevState.isFormShown}));
  }

  render() {
    const {isAimAdded} = this.props;
    const {amount, description} = this.props.aim;
    const {isFormShown} = this.state;
    return (
      <Fragment>
        <Aim
          amount = {Number(amount)}
          description = {description}
        />
        <Card
          capture={CardCaptures.ADMISSIONS}
        />
        <Card
          capture={CardCaptures.RESULT}
        />
        <AddButton
          onAddButtonClick={this.handleFormShow}
        />
        {isFormShown &&
        <AddFormWrapped
          onCloseButtonClick={this.handleFormShow}
          isAimAdded = {isAimAdded}
        />}
      </Fragment>
    );
  }
}

App.propTypes = {
  isAimAdded: PropTypes.bool.isRequired,
  aim: PropTypes.shape({
    description: PropTypes.string,
    amount: PropTypes.string,
  }),
};

const mapStateToProps = (state) => ({
  isAimAdded: state.isAimAdded,
  aim: state.aim,
});

export default connect(mapStateToProps)(App);
