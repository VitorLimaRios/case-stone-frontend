import React from 'react';
import { GlobalProvider } from './contexts/GlobalContext';
import Routes from './routes/Routes';

export default function App() {
  return (
    <GlobalProvider>
      <Routes />
    </GlobalProvider>
  );
}
