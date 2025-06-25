// src/components/Submit.jsx
import React from 'react';
import { Button, Stack } from '@mantine/core';
import PropTypes from 'prop-types';

/**
 * A reusable Submit button component styled with Mantine.
 * Props:
 * - label: Text to display on the button.
 * - onClick: Function to handle the click event.
 * - disabled: Boolean to disable the button.
 */
function Submit({ label = 'Submit', onClick, disabled = false }) {
  return (
    <Stack spacing="sm">
      <Button
        type="submit"
        size="lg"
        color="blue"
        fullWidth
        onClick={onClick}
        disabled={disabled}
        radius="md"
        variant="filled"
      >
        {label}
      </Button>
    </Stack>
  );
}

Submit.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default Submit;
