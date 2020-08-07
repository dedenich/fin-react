import React from 'react';
import PropTypes from 'prop-types';

import {FormHeadings} from '../../const.js';

const AddForm = (props) => {
  const {onCloseButtonClick, isAimAdded} = props;
  return (
    <div className="form-bg" id="form">
      <div className="wrapper">
        <button className="close_button" id="close_button" onClick={onCloseButtonClick}/>
        <div className="card form">
          <h3>{isAimAdded ? FormHeadings.CHANGE_AMOUNT : FormHeadings.ADD_AIM}</h3>
          <form>
            <input type="number" step="0.01" autoFocus placeholder="Сумма"/>
            <input type="text" placeholder="Комментарий"/>
            {isAimAdded &&
            <div className="form__input_togler">
              <p>Добавление</p>
              <label className="switch">
                <input type="checkbox" id="input-Change" defaultChecked />
                <span className="slider round" />
              </label>
            </div>}
            <input className="form_submit" type="submit" value="Добавить!"/>
          </form>
        </div>
      </div>
    </div>);
};

AddForm.propTypes = {
  onCloseButtonClick: PropTypes.func.isRequired,
  isAimAdded: PropTypes.bool.isRequired,
};

export default AddForm;
