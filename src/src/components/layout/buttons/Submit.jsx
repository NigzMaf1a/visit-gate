import React from 'react';
import PropTypes from 'prop-types';

/**
 * A reusable Submit button component styled with Bootstrap.
 * Props:
 * - label: Text to display on the button.
 * - onClick: Function to handle the click event.
 * - disabled: Boolean to disable the button.
 */
function Submit({ label = 'Submit', onClick, disabled = false }) {
  return (
    <div className="d-grid gap-2">
      <button
        type="submit"
        className="btn btn-primary btn-lg"
        onClick={onClick}
        disabled={disabled}
      >
        {label}
      </button>
    </div>
  );
}

Submit.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default Submit;
