import { Container } from '@mui/material';
import React from 'react';
import Games from './components/Games';
import Logo from './components/Logo';
import Search from './components/Search';

function App() {
  return (
      <Container style={{maxWidth: "1300px"}}>
        <Logo />
        <Search />
        <Games />
      </Container>
  );
}

export default App;
