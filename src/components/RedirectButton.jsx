import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function RedirectButton({ text, path }) {
  const history = useHistory();

  return (
    <Button
      variant="secondary"
      type="button"
      size="lg"
      onClick={() => history.push(path)}
    >
      { text }
    </Button>
  );
}

RedirectButton.propTypes = {
  text: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};
