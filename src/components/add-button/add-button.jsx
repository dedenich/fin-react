import React from 'react';
import PropTypes from 'prop-types';

const AddButton = () => {
  // const {onAddButton} = props;
  const onAddButton = () => {};
  return <button type="button" className="add_button" onClick={onAddButton}/>;
};

AddButton.propTypes = {
  onAddButton: PropTypes.func,
};

export default AddButton;
