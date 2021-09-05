import React from 'react';
import { GlobalProvider } from './contexts/GlobalContext';
import Routes from './routes/Routes';

function App() {
  return (
    <GlobalProvider>
      <Routes />
    </GlobalProvider>
  );
}

export default App;
