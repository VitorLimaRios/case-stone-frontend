import React, { useContext, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { GlobalContext } from '../contexts/GlobalContext';

export default function Forms({ username, useremail, userpassword }) {
  const {
    functions: {
      setName,
      setEmail,
      setPassword,
    },
  } = useContext(GlobalContext);

  useEffect(() => {
    setName('');
    setEmail('');
    setPassword('');
  }, []);

  const nameInput = () => (
    <Form.Group className="mb-3" controlId="registerBasicName">
      <Form.Label>Name</Form.Label>
      <Form.Control
        type="name"
        placeholder="Username"
        onChange={({ target }) => setName(target.value)}
      />
    </Form.Group>
  );

  const emailinput = () => (
    <Form.Group className="mb-3" controlId="registerBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control
        type="email"
        placeholder="Enter email"
        onChange={({ target }) => setEmail(target.value)}
      />
    </Form.Group>
  );

  const passwordInput = () => (
    <Form.Group className="mb-3" controlId="registerBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control
        type="password"
        placeholder="Password"
        onChange={({ target }) => setPassword(target.value)}
      />
    </Form.Group>
  );

  return (
    <Form className="p-4">
      { username && nameInput() }
      { useremail && emailinput() }
      { userpassword && passwordInput() }
    </Form>
  );
}

Forms.propTypes = {
  username: PropTypes.bool.isRequired,
  useremail: PropTypes.bool.isRequired,
  userpassword: PropTypes.bool.isRequired,
};
