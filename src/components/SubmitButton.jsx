import React, { useContext, useState, useEffect } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import { GlobalContext } from '../contexts/GlobalContext';
import schema from '../lib/Validator';

export default function SubmitButton({ text, API_URL, path }) {
  const {
    values: {
      name,
      email,
      password,
    },
  } = useContext(GlobalContext);

  const history = useHistory();

  const [loading, setLoading] = useState(false);
  const [disable, setDisable] = useState(true);

  const obj = (name)
    ? {
      name,
      email,
      password,
    } : {
      email,
      password,
    };

  useEffect(() => {
    const { error } = schema.validate(obj);
    if (!error) setDisable(false);
    else setDisable(true);
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(API_URL, obj);
      setLoading(false);
      localStorage.setItem('user', JSON.stringify(response.data));
      history.push(path);
    } catch (err) {
      setLoading(false);
    }
  };

  return (
    <Button
      onClick={(e) => handleSubmit(e)}
      variant="success"
      type="submit"
      size="lg"
      data-testid="common_login__button-login"
      disabled={disable}
    >
      { text }
      { ' ' }
      <Spinner
        className={loading ? 'visible' : 'invisible'}
        as="span"
        animation="grow"
        size="sm"
        role="status"
        aria-hidden="true"
      />
    </Button>
  );
}

SubmitButton.propTypes = {
  text: PropTypes.string.isRequired,
  API_URL: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};
