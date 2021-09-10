import React, { useContext, useState, useEffect } from 'react';
import { Button, Spinner, Alert } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import { GlobalContext } from '../contexts/GlobalContext';
import schema from '../lib/Validator';

export default function SubmitButton({ text, API_URL, methodHTTP }) {
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
  const [showAlert, setShowAlert] = useState(false);

  const obj = (name)
    ? {
      username: name,
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
      const response = await axios({
        method: methodHTTP,
        url: API_URL,
        data: obj,
      });
      setLoading(false);
      localStorage.setItem('user', JSON.stringify(response.data));
      history.push('/characters');
    } catch (err) {
      setLoading(false);
      setShowAlert(err.message);
    }
  };

  return (
    <>
      <Button
        onClick={(e) => handleSubmit(e)}
        variant="success"
        type="submit"
        size="lg"
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
      <Alert variant="danger" show={showAlert} onClose={() => setShowAlert(false)} dismissible>
        {showAlert}
      </Alert>
    </>
  );
}

SubmitButton.propTypes = {
  text: PropTypes.string.isRequired,
  API_URL: PropTypes.string.isRequired,
  methodHTTP: PropTypes.string.isRequired,
};
