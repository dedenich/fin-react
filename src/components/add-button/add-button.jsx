import React from 'react';
import PropTypes from 'prop-types';

const AddButton = (props) => {
  const {onAddButtonClick} = props;
  return <button type="button" className="add_button" onClick={onAddButtonClick}/>;
};

AddButton.propTypes = {
  onAddButtonClick: PropTypes.func,
};

export default AddButton;
