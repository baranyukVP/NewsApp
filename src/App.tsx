import React from 'react';

import { Header } from './components/organisms/Header';
import Router from './router/Router';

function App() {
  return (
    <Header>
      <Router />
    </Header>
  );
}

export default App;
