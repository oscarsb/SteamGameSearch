import { Container, Grid } from '@mui/material';
import React from 'react';
import GameCard from './GameCard';

import "./gameCard.css";


function Games() {
  return (
    <div>
      <Container className='gamesContainer'>
        <Grid 
          container 
          spacing={0} 
          direction={"row"}
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: '10vh' }}
        >
          <GameCard />
          <GameCard />
          <GameCard />
          <GameCard />
          <GameCard />

          <Grid item sm={7} md={6} lg={4} alignItems="center">
              <div className='fakeGameCard'>
              </div>
          </Grid>
          <Grid item sm={7} md={6} lg={4} alignItems="center">
              <div className='fakeGameCard'>
              </div>
          </Grid>
          <Grid item sm={7} md={6} lg={4} alignItems="center">
              <div className='fakeGameCard'>
              </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Games;
