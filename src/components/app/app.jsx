import React, {Fragment, PureComponent} from 'react';

import Aim from '../aim/aim.jsx';
import Card from '../card/card.jsx';
import AddButton from '../add-button/add-button.jsx';
import AddForm from '../add-form/add-form.jsx';

import withForm from '../../hocs/with-form/with-form.jsx';

import {CardCaptures} from '../../const.js';
import mockAim from '../../mocks/aim-mock.js';

const {amount, description} = mockAim;

const AddFromWrapped = withForm(AddForm);

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
    const {isFormShown} = this.state;
    const isAimAdded = true;
    return (
      <Fragment>
        <Aim
          amount = {amount}
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
        <AddFromWrapped
          onCloseButtonClick={this.handleFormShow}
          isAimAdded = {isAimAdded}
        />}
      </Fragment>
    );
  }
}

export default App;
