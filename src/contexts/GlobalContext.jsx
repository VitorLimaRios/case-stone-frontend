import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const provide = {
    values: {
      name,
      email,
      password,
    },
    functions: {
      setName,
      setEmail,
      setPassword,
    },
  };

  return (
    <GlobalContext.Provider value={provide}>
      {children}
    </GlobalContext.Provider>
  );
}

GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
