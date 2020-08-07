import React from 'react';
import PropTypes from 'prop-types';

import {FormHeadings} from '../../const.js';

const AddForm = (props) => {
  const {onCloseButtonClick, isAimAdded, onInputChange, onFormSubmit} = props;
  return (
    <div className="form-bg" id="form">
      <div className="wrapper">
        <button className="close_button" id="close_button" onClick={onCloseButtonClick}/>
        <div className="card form">
          <h3>{isAimAdded ? FormHeadings.CHANGE_AMOUNT : FormHeadings.ADD_AIM}</h3>
          <form action="#" onSubmit={onFormSubmit}>
            <input type="number" step="0.01" autoFocus placeholder="Сумма" name="amount" onChange={onInputChange}/>
            <input type="text" placeholder="Комментарий" name="comment" onChange={onInputChange}/>
            {isAimAdded &&
            <div className="form__input_togler">
              <p>Добавление</p>
              <label className="switch">
                <input type="checkbox" name="isFunding" defaultChecked onChange={onInputChange}/>
                <span className="slider round" />
              </label>
            </div>}
            <button className="form_submit" type="submit">Добавить!</button>
          </form>
        </div>
      </div>
    </div>);
};

AddForm.propTypes = {
  onCloseButtonClick: PropTypes.func.isRequired,
  isAimAdded: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
};

export default AddForm;
